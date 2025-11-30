'use client'

import { useState, useEffect } from 'react'
import { Save, Edit, Eye, Upload } from 'lucide-react'

interface PageContent {
  id: string
  page: string
  content: any
}

export default function PageEditor() {
  const [pages, setPages] = useState<PageContent[]>([])
  const [selectedPage, setSelectedPage] = useState<string>('home')
  const [content, setContent] = useState<any>({})
  const [isEditing, setIsEditing] = useState(false)
  const [uploading, setUploading] = useState(false)

  const pageTemplates = {
    home: {
      hero: {
        title: 'Evidence-Based, Heart-Led',
        subtitle: 'Your Journey, Our Support. Reach New Heights',
        description: 'Comprehensive ABA programs designed to help children build skills, develop independence, and achieve their full potential.',
        image: '/ABA therapy website image.jpg'
      },
      stats: {
        childrenHelped: '500+',
        programs: '14',
        successRate: '95%',
        experience: '10+'
      },
      testimonials: [
        {
          text: 'The 1:1 ABA therapy has been life-changing for our son. The therapists are incredibly patient and skilled.',
          author: 'Sarah M.'
        },
        {
          text: 'The social skills groups helped our daughter make friends and gain confidence. Amazing program!',
          author: 'Michael R.'
        },
        {
          text: 'Professional, caring, and effective. The parent coaching sessions were invaluable for our family.',
          author: 'Jennifer L.'
        }
      ]
    },
    about: {
      mission: {
        title: 'Our Mission',
        content: 'At AscendCare & Early Intervention, we provide comprehensive, evidence-based ABA programs designed to help children build skills, develop independence, and achieve their full potential.'
      },
      values: [
        { name: 'Compassion', description: 'Every child deserves understanding, patience, and care' },
        { name: 'Excellence', description: 'We maintain the highest standards in all our programs' },
        { name: 'Collaboration', description: 'Working together with families for the best outcomes' },
        { name: 'Growth', description: 'Celebrating every milestone and achievement' }
      ]
    },
    services: {
      title: 'Our Services',
      description: 'Comprehensive ABA programs for every stage of development',
      featured: [
        '1:1 ABA Therapy',
        'Social Skills Groups',
        'ABA + Montessori Program',
        'Early Intervention Program'
      ]
    }
  }

  useEffect(() => {
    fetchPageContent()
  }, [selectedPage])

  const fetchPageContent = async () => {
    try {
      const response = await fetch(`/api/admin/pages/${selectedPage}`)
      if (response.ok) {
        const data = await response.json()
        setContent(data.content || pageTemplates[selectedPage as keyof typeof pageTemplates] || {})
      } else {
        setContent(pageTemplates[selectedPage as keyof typeof pageTemplates] || {})
      }
    } catch (error) {
      console.error('Failed to fetch page content:', error)
      setContent(pageTemplates[selectedPage as keyof typeof pageTemplates] || {})
    }
  }

  const saveContent = async () => {
    try {
      await fetch(`/api/admin/pages/${selectedPage}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      })
      setIsEditing(false)
      alert('Content saved successfully!')
    } catch (error) {
      console.error('Failed to save content:', error)
      alert('Failed to save content')
    }
  }

  const updateContent = (path: string, value: any) => {
    const keys = path.split('.')
    const newContent = { ...content }
    let current = newContent
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {}
      current = current[keys[i]]
    }
    
    current[keys[keys.length - 1]] = value
    setContent(newContent)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, path: string) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const data = await response.json()
        updateContent(path, data.path)
      } else {
        alert('Upload failed')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const renderEditor = () => {
    switch (selectedPage) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Hero Section</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={content.hero?.title || ''}
                    onChange={(e) => updateContent('hero.title', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <input
                    type="text"
                    value={content.hero?.subtitle || ''}
                    onChange={(e) => updateContent('hero.subtitle', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={content.hero?.description || ''}
                    onChange={(e) => updateContent('hero.description', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg h-24"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Hero Image</label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={content.hero?.image || ''}
                      onChange={(e) => updateContent('hero.image', e.target.value)}
                      placeholder="/image.jpg"
                      className="w-full px-3 py-2 border rounded-lg"
                      disabled={!isEditing}
                    />
                    {isEditing && (
                      <div className="flex items-center gap-2">
                        <label className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Upload className="w-4 h-4" />
                            {uploading ? 'Uploading...' : 'Upload Image'}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'hero.image')}
                            className="hidden"
                            disabled={uploading}
                          />
                        </label>
                      </div>
                    )}
                    <p className="text-xs text-gray-500">Enter path or upload an image</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Statistics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Children Helped</label>
                  <input
                    type="text"
                    value={content.stats?.childrenHelped || ''}
                    onChange={(e) => updateContent('stats.childrenHelped', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Programs</label>
                  <input
                    type="text"
                    value={content.stats?.programs || ''}
                    onChange={(e) => updateContent('stats.programs', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Success Rate</label>
                  <input
                    type="text"
                    value={content.stats?.successRate || ''}
                    onChange={(e) => updateContent('stats.successRate', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Experience</label>
                  <input
                    type="text"
                    value={content.stats?.experience || ''}
                    onChange={(e) => updateContent('stats.experience', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'about':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Mission</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={content.mission?.title || ''}
                    onChange={(e) => updateContent('mission.title', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <textarea
                    value={content.mission?.content || ''}
                    onChange={(e) => updateContent('mission.content', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg h-32"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-4">Page Content</h3>
            <textarea
              value={JSON.stringify(content, null, 2)}
              onChange={(e) => {
                try {
                  setContent(JSON.parse(e.target.value))
                } catch (error) {
                  // Invalid JSON, ignore
                }
              }}
              className="w-full px-3 py-2 border rounded-lg h-96 font-mono text-sm"
              disabled={!isEditing}
            />
          </div>
        )
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Page Editor</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              isEditing 
                ? 'bg-gray-600 text-white hover:bg-gray-700' 
                : 'bg-amber-600 text-white hover:bg-amber-700'
            }`}
          >
            {isEditing ? <Eye className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
            {isEditing ? 'Preview' : 'Edit'}
          </button>
          {isEditing && (
            <button
              onClick={saveContent}
              className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-6">
        {/* Page Selector */}
        <div className="w-64">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-bold mb-4">Pages</h3>
            <div className="space-y-2">
              {['home', 'about', 'services', 'contact'].map(page => (
                <button
                  key={page}
                  onClick={() => setSelectedPage(page)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedPage === page 
                      ? 'bg-amber-100 text-amber-700' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Editor */}
        <div className="flex-1">
          {renderEditor()}
        </div>
      </div>
    </div>
  )
}
