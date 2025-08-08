'use client'

import { useState } from 'react'
import { CheckCircle, Circle, Download, Clock, DollarSign, TrendingUp, FileText } from '@/components/ui/Icons'

interface Task {
  id: string
  name: string
  description: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  timeImpact: 'low' | 'medium' | 'high'
  costImpact: 'low' | 'medium' | 'high'
  priority: number
  estimatedWeeklyHours?: number
}

interface TaskCategory {
  id: string
  name: string
  description: string
  icon: string
  tasks: Task[]
}

const taskCategories: TaskCategory[] = [
  {
    id: 'administrative',
    name: 'Administrative Tasks',
    description: 'Daily administrative work that keeps your business running',
    icon: '📋',
    tasks: [
      {
        id: 'email-management',
        name: 'Email management and organization',
        description: 'Sorting, filtering, responding to routine emails',
        category: 'administrative',
        difficulty: 'easy',
        timeImpact: 'high',
        costImpact: 'high',
        priority: 9,
        estimatedWeeklyHours: 8
      },
      {
        id: 'calendar-scheduling',
        name: 'Calendar management and scheduling',
        description: 'Booking appointments, managing conflicts, scheduling meetings',
        category: 'administrative',
        difficulty: 'easy',
        timeImpact: 'high',
        costImpact: 'medium',
        priority: 8,
        estimatedWeeklyHours: 4
      },
      {
        id: 'data-entry',
        name: 'Data entry and database management',
        description: 'Inputting information, updating records, maintaining databases',
        category: 'administrative',
        difficulty: 'easy',
        timeImpact: 'medium',
        costImpact: 'low',
        priority: 7,
        estimatedWeeklyHours: 6
      },
      {
        id: 'document-organization',
        name: 'Document filing and organization',
        description: 'Organizing files, creating folder structures, document management',
        category: 'administrative',
        difficulty: 'easy',
        timeImpact: 'medium',
        costImpact: 'low',
        priority: 6,
        estimatedWeeklyHours: 3
      },
      {
        id: 'travel-booking',
        name: 'Travel planning and booking',
        description: 'Researching flights, booking hotels, creating itineraries',
        category: 'administrative',
        difficulty: 'medium',
        timeImpact: 'medium',
        costImpact: 'medium',
        priority: 6,
        estimatedWeeklyHours: 2
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing & Content',
    description: 'Marketing activities and content creation tasks',
    icon: '📱',
    tasks: [
      {
        id: 'social-media-posting',
        name: 'Social media posting and management',
        description: 'Creating posts, scheduling content, engaging with followers',
        category: 'marketing',
        difficulty: 'medium',
        timeImpact: 'high',
        costImpact: 'high',
        priority: 8,
        estimatedWeeklyHours: 6
      },
      {
        id: 'content-writing',
        name: 'Blog posts and content writing',
        description: 'Writing articles, creating marketing copy, editing content',
        category: 'marketing',
        difficulty: 'hard',
        timeImpact: 'high',
        costImpact: 'high',
        priority: 7,
        estimatedWeeklyHours: 8
      },
      {
        id: 'lead-research',
        name: 'Lead research and prospecting',
        description: 'Finding potential customers, researching contact information',
        category: 'marketing',
        difficulty: 'medium',
        timeImpact: 'medium',
        costImpact: 'medium',
        priority: 7,
        estimatedWeeklyHours: 4
      },
      {
        id: 'email-campaigns',
        name: 'Email marketing campaigns',
        description: 'Creating newsletters, managing email lists, tracking metrics',
        category: 'marketing',
        difficulty: 'medium',
        timeImpact: 'medium',
        costImpact: 'medium',
        priority: 6,
        estimatedWeeklyHours: 3
      },
      {
        id: 'graphic-design',
        name: 'Basic graphic design and image editing',
        description: 'Creating simple graphics, editing photos, designing social media images',
        category: 'marketing',
        difficulty: 'medium',
        timeImpact: 'medium',
        costImpact: 'medium',
        priority: 5,
        estimatedWeeklyHours: 4
      }
    ]
  },
  {
    id: 'customer-service',
    name: 'Customer Service',
    description: 'Customer support and relationship management tasks',
    icon: '🎧',
    tasks: [
      {
        id: 'customer-inquiries',
        name: 'Responding to customer inquiries',
        description: 'Handling customer questions via email, chat, or phone',
        category: 'customer-service',
        difficulty: 'medium',
        timeImpact: 'high',
        costImpact: 'high',
        priority: 8,
        estimatedWeeklyHours: 10
      },
      {
        id: 'order-processing',
        name: 'Order processing and fulfillment',
        description: 'Managing orders, updating customers, coordinating shipments',
        category: 'customer-service',
        difficulty: 'easy',
        timeImpact: 'medium',
        costImpact: 'medium',
        priority: 7,
        estimatedWeeklyHours: 5
      },
      {
        id: 'follow-up-calls',
        name: 'Customer follow-up and surveys',
        description: 'Checking satisfaction, gathering feedback, maintaining relationships',
        category: 'customer-service',
        difficulty: 'medium',
        timeImpact: 'medium',
        costImpact: 'low',
        priority: 6,
        estimatedWeeklyHours: 3
      },
      {
        id: 'live-chat',
        name: 'Live chat support',
        description: 'Providing real-time customer support via website chat',
        category: 'customer-service',
        difficulty: 'medium',
        timeImpact: 'high',
        costImpact: 'medium',
        priority: 7,
        estimatedWeeklyHours: 15
      }
    ]
  },
  {
    id: 'operations',
    name: 'Operations & Project Management',
    description: 'Operational tasks and project coordination',
    icon: '⚙️',
    tasks: [
      {
        id: 'project-coordination',
        name: 'Project management and coordination',
        description: 'Managing timelines, coordinating team members, tracking progress',
        category: 'operations',
        difficulty: 'hard',
        timeImpact: 'high',
        costImpact: 'high',
        priority: 8,
        estimatedWeeklyHours: 6
      },
      {
        id: 'vendor-management',
        name: 'Vendor and supplier management',
        description: 'Communicating with suppliers, managing contracts, processing payments',
        category: 'operations',
        difficulty: 'medium',
        timeImpact: 'medium',
        costImpact: 'medium',
        priority: 6,
        estimatedWeeklyHours: 3
      },
      {
        id: 'reporting',
        name: 'Creating reports and analytics',
        description: 'Compiling data, creating dashboards, generating business reports',
        category: 'operations',
        difficulty: 'medium',
        timeImpact: 'medium',
        costImpact: 'medium',
        priority: 7,
        estimatedWeeklyHours: 4
      },
      {
        id: 'inventory-management',
        name: 'Inventory tracking and management',
        description: 'Monitoring stock levels, updating inventory, managing reorders',
        category: 'operations',
        difficulty: 'easy',
        timeImpact: 'low',
        costImpact: 'low',
        priority: 5,
        estimatedWeeklyHours: 2
      }
    ]
  },
  {
    id: 'finance',
    name: 'Finance & Bookkeeping',
    description: 'Financial management and bookkeeping tasks',
    icon: '💰',
    tasks: [
      {
        id: 'bookkeeping',
        name: 'Basic bookkeeping and expense tracking',
        description: 'Recording transactions, categorizing expenses, reconciling accounts',
        category: 'finance',
        difficulty: 'medium',
        timeImpact: 'medium',
        costImpact: 'high',
        priority: 8,
        estimatedWeeklyHours: 4
      },
      {
        id: 'invoice-management',
        name: 'Invoice creation and management',
        description: 'Creating invoices, sending reminders, tracking payments',
        category: 'finance',
        difficulty: 'easy',
        timeImpact: 'medium',
        costImpact: 'medium',
        priority: 7,
        estimatedWeeklyHours: 3
      },
      {
        id: 'expense-reports',
        name: 'Expense report processing',
        description: 'Reviewing receipts, creating expense reports, managing reimbursements',
        category: 'finance',
        difficulty: 'easy',
        timeImpact: 'low',
        costImpact: 'low',
        priority: 5,
        estimatedWeeklyHours: 2
      }
    ]
  }
]

export function TaskAuditTool() {
  const [selectedTasks, setSelectedTasks] = useState<Set<string>>(new Set())
  const [currentStep, setCurrentStep] = useState<'audit' | 'results'>('audit')
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  })

  const toggleTask = (taskId: string) => {
    const newSelected = new Set(selectedTasks)
    if (newSelected.has(taskId)) {
      newSelected.delete(taskId)
    } else {
      newSelected.add(taskId)
    }
    setSelectedTasks(newSelected)
  }

  const calculateResults = () => {
    const selectedTaskObjects = taskCategories
      .flatMap(category => category.tasks)
      .filter(task => selectedTasks.has(task.id))

    const totalHours = selectedTaskObjects.reduce((sum, task) => sum + (task.estimatedWeeklyHours || 0), 0)
    const highPriorityTasks = selectedTaskObjects.filter(task => task.priority >= 7)
    const totalAnnualHours = totalHours * 50 // 50 working weeks

    return {
      totalTasks: selectedTasks.size,
      totalWeeklyHours: totalHours,
      totalAnnualHours,
      highPriorityTasks: highPriorityTasks.length,
      selectedTaskObjects,
      estimatedAnnualSavings: totalAnnualHours * 50 // Assuming $50/hour value
    }
  }

  const generatePDFReport = () => {
    const results = calculateResults()
    
    // Create a simple text report (in a real app, you'd use a PDF library)
    const reportData = {
      user: userInfo,
      results,
      tasks: results.selectedTaskObjects,
      generatedAt: new Date().toISOString()
    }

    // Convert to JSON and create downloadable file
    const dataStr = JSON.stringify(reportData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = 'task-audit-report.json'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const proceedToResults = () => {
    if (selectedTasks.size === 0) {
      alert('Please select at least one task to continue.')
      return
    }
    setCurrentStep('results')
  }

  if (currentStep === 'results') {
    const results = calculateResults()
    
    return (
      <div className="max-w-4xl mx-auto">
        {/* User Info Collection */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Personalized Report</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input
                type="text"
                value={userInfo.company}
                onChange={(e) => setUserInfo(prev => ({ ...prev, company: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <input
                type="text"
                value={userInfo.role}
                onChange={(e) => setUserInfo(prev => ({ ...prev, role: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="CEO, Founder, Manager, etc."
              />
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Tasks Selected</p>
                <p className="text-3xl font-bold">{results.totalTasks}</p>
              </div>
              <FileText className="h-12 w-12 text-blue-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-amber-100 text-sm font-medium">Weekly Hours to Delegate</p>
                <p className="text-3xl font-bold">{results.totalWeeklyHours}h</p>
              </div>
              <Clock className="h-12 w-12 text-amber-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Estimated Annual Value</p>
                <p className="text-3xl font-bold">${results.estimatedAnnualSavings.toLocaleString()}</p>
              </div>
              <DollarSign className="h-12 w-12 text-green-200" />
            </div>
          </div>
        </div>

        {/* Selected Tasks Breakdown */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Your Selected Tasks</h3>
          
          <div className="space-y-4">
            {taskCategories.map(category => {
              const categoryTasks = category.tasks.filter(task => selectedTasks.has(task.id))
              if (categoryTasks.length === 0) return null
              
              return (
                <div key={category.id} className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="mr-2">{category.icon}</span>
                    {category.name} ({categoryTasks.length})
                  </h4>
                  
                  <div className="space-y-2">
                    {categoryTasks.map(task => (
                      <div key={task.id} className="flex items-start justify-between bg-gray-50 rounded p-3">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{task.name}</div>
                          <div className="text-sm text-gray-600 mt-1">{task.description}</div>
                        </div>
                        <div className="ml-4 text-right">
                          <div className="text-sm font-medium text-gray-900">
                            {task.estimatedWeeklyHours}h/week
                          </div>
                          <div className="text-xs text-gray-500">
                            Priority: {task.priority}/10
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Recommendations</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Start with High-Priority Tasks</h4>
              <p className="text-gray-600 mb-2">
                You have {results.highPriorityTasks} high-priority tasks selected. These should be your first delegation targets as they offer the highest impact.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Suggested VA Hours</h4>
              <p className="text-gray-600 mb-2">
                Based on your selections, we recommend starting with a {Math.min(20, results.totalWeeklyHours)}-hour per week virtual assistant to handle these tasks effectively.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Implementation Timeline</h4>
              <p className="text-gray-600 mb-2">
                Phase 1: Delegate administrative tasks (weeks 1-2)<br />
                Phase 2: Add marketing and customer service tasks (weeks 3-4)<br />
                Phase 3: Include operational and specialized tasks (weeks 5-8)
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center space-x-4">
          <button
            onClick={generatePDFReport}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Report
          </button>
          
          <a
            href="/schedule-call"
            className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Schedule Consultation
          </a>
          
          <button
            onClick={() => setCurrentStep('audit')}
            className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200"
          >
            Modify Selection
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              Select Tasks You Currently Handle
            </h2>
          </div>
          <div className="text-sm text-gray-500">
            {selectedTasks.size} tasks selected
          </div>
        </div>

        <div className="space-y-8">
          {taskCategories.map((category) => (
            <div key={category.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-3">
                {category.tasks.map((task) => {
                  const isSelected = selectedTasks.has(task.id)
                  return (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-200'
                          : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="mt-1">
                          {isSelected ? (
                            <CheckCircle className="h-5 w-5 text-blue-600" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{task.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                          
                          <div className="flex items-center space-x-4 mt-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              task.difficulty === 'easy' 
                                ? 'bg-green-100 text-green-800'
                                : task.difficulty === 'medium'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {task.difficulty} to delegate
                            </span>
                            
                            <span className="text-xs text-gray-500">
                              ~{task.estimatedWeeklyHours}h/week
                            </span>
                            
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              task.timeImpact === 'high'
                                ? 'bg-purple-100 text-purple-800'
                                : task.timeImpact === 'medium'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {task.timeImpact} time impact
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={proceedToResults}
            disabled={selectedTasks.size === 0}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
          >
            <TrendingUp className="mr-3 h-6 w-6" />
            Analyze My Tasks ({selectedTasks.size})
          </button>
        </div>
      </div>
    </div>
  )
}