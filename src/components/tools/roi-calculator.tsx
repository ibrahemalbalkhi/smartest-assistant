'use client'

import { useState } from 'react'
import { Calculator, DollarSign, Clock, TrendingUp, Users, Download } from 'lucide-react'

interface ROIInputs {
  annualSalary: number
  hoursPerWeekOnAdmin: number
  numberOfEmployees: number
  vaHourlyRate: number
  vaHoursPerWeek: number
}

interface ROIResults {
  yourHourlyRate: number
  annualTimeValue: number
  vaCost: number
  netSavings: number
  roiPercentage: number
  timeReclaimed: number
  breakEvenMonths: number
}

const defaultInputs: ROIInputs = {
  annualSalary: 100000,
  hoursPerWeekOnAdmin: 10,
  numberOfEmployees: 1,
  vaHourlyRate: 25,
  vaHoursPerWeek: 10
}

export function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>(defaultInputs)
  const [results, setResults] = useState<ROIResults | null>(null)
  const [activeTab, setActiveTab] = useState<'calculator' | 'results'>('calculator')

  const calculateROI = () => {
    const hoursPerYear = 50 // 50 working weeks
    const yourHourlyRate = inputs.annualSalary / (40 * hoursPerYear)
    const annualAdminHours = inputs.hoursPerWeekOnAdmin * hoursPerYear * inputs.numberOfEmployees
    const annualTimeValue = annualAdminHours * yourHourlyRate
    const vaCost = inputs.vaHourlyRate * inputs.vaHoursPerWeek * hoursPerYear
    const netSavings = annualTimeValue - vaCost
    const roiPercentage = ((netSavings / vaCost) * 100)
    const timeReclaimed = inputs.hoursPerWeekOnAdmin * inputs.numberOfEmployees
    const breakEvenMonths = vaCost / (netSavings / 12)

    const calculatedResults: ROIResults = {
      yourHourlyRate,
      annualTimeValue,
      vaCost,
      netSavings,
      roiPercentage,
      timeReclaimed,
      breakEvenMonths: Math.max(0.1, breakEvenMonths)
    }

    setResults(calculatedResults)
    setActiveTab('results')
  }

  const updateInput = (field: keyof ROIInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatNumber = (num: number, decimals: number = 1) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(num)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-200 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
              activeTab === 'calculator'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Calculator
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
              activeTab === 'results'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            disabled={!results}
          >
            Results
          </button>
        </div>
      </div>

      {activeTab === 'calculator' && (
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Calculator className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              Calculate Your ROI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Annual Salary
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.annualSalary}
                    onChange={(e) => updateInput('annualSalary', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="100000"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Your annual salary or business income
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours per Week on Admin Tasks
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.hoursPerWeekOnAdmin}
                    onChange={(e) => updateInput('hoursPerWeekOnAdmin', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Email, scheduling, data entry, social media, etc.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    min="1"
                    value={inputs.numberOfEmployees}
                    onChange={(e) => updateInput('numberOfEmployees', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Including yourself and team members doing admin work
                </p>
              </div>
            </div>

            {/* VA Cost Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Virtual Assistant Hourly Rate
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.vaHourlyRate}
                    onChange={(e) => updateInput('vaHourlyRate', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="25"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Typical range: $20-$50/hour for smart VAs
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  VA Hours per Week
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.vaHoursPerWeek}
                    onChange={(e) => updateInput('vaHoursPerWeek', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Hours you plan to delegate to your VA
                </p>
              </div>

              {/* Quick Calculation Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Quick Preview</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Your hourly rate: {formatCurrency((inputs.annualSalary / (40 * 50)))}</div>
                  <div>Weekly admin cost: {formatCurrency((inputs.annualSalary / (40 * 50)) * inputs.hoursPerWeekOnAdmin * inputs.numberOfEmployees)}</div>
                  <div>Weekly VA cost: {formatCurrency(inputs.vaHourlyRate * inputs.vaHoursPerWeek)}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={calculateROI}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
            >
              <TrendingUp className="mr-3 h-6 w-6" />
              Calculate My ROI
            </button>
          </div>
        </div>
      )}

      {activeTab === 'results' && results && (
        <div className="space-y-8">
          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Annual Net Savings</p>
                  <p className="text-3xl font-bold">{formatCurrency(results.netSavings)}</p>
                </div>
                <DollarSign className="h-12 w-12 text-green-200" />
              </div>
              <p className="text-green-100 text-sm mt-2">
                After paying for your VA
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">ROI Percentage</p>
                  <p className="text-3xl font-bold">{formatNumber(results.roiPercentage, 0)}%</p>
                </div>
                <TrendingUp className="h-12 w-12 text-blue-200" />
              </div>
              <p className="text-blue-100 text-sm mt-2">
                Return on investment
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-100 text-sm font-medium">Time Reclaimed</p>
                  <p className="text-3xl font-bold">{results.timeReclaimed}h</p>
                </div>
                <Clock className="h-12 w-12 text-amber-200" />
              </div>
              <p className="text-amber-100 text-sm mt-2">
                Hours per week back to you
              </p>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Breakdown</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Your Current Costs</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Your effective hourly rate:</span>
                    <span className="font-medium">{formatCurrency(results.yourHourlyRate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual time spent on admin:</span>
                    <span className="font-medium">{inputs.hoursPerWeekOnAdmin * inputs.numberOfEmployees * 50} hours</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-semibold text-gray-900">Total annual cost of admin work:</span>
                    <span className="font-bold text-red-600">{formatCurrency(results.annualTimeValue)}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">VA Investment</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">VA hourly rate:</span>
                    <span className="font-medium">{formatCurrency(inputs.vaHourlyRate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual VA hours:</span>
                    <span className="font-medium">{inputs.vaHoursPerWeek * 50} hours</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-semibold text-gray-900">Total annual VA cost:</span>
                    <span className="font-bold text-blue-600">{formatCurrency(results.vaCost)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Your Savings Visualization</h3>
            
            <div className="relative">
              <div className="flex items-end justify-center space-x-8 h-64">
                {/* Current Cost Bar */}
                <div className="text-center">
                  <div
                    className="bg-red-500 rounded-t-lg w-16 flex items-end justify-center text-white text-sm font-medium"
                    style={{ height: '200px' }}
                  >
                    <span className="transform -rotate-90 whitespace-nowrap">Current Cost</span>
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-900">{formatCurrency(results.annualTimeValue)}</div>
                </div>

                {/* VA Cost Bar */}
                <div className="text-center">
                  <div
                    className="bg-blue-500 rounded-t-lg w-16 flex items-end justify-center text-white text-sm font-medium"
                    style={{ height: `${(results.vaCost / results.annualTimeValue) * 200}px` }}
                  >
                    <span className="transform -rotate-90 whitespace-nowrap">VA Cost</span>
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-900">{formatCurrency(results.vaCost)}</div>
                </div>

                {/* Savings Bar */}
                <div className="text-center">
                  <div
                    className="bg-green-500 rounded-t-lg w-16 flex items-end justify-center text-white text-sm font-medium"
                    style={{ height: `${(results.netSavings / results.annualTimeValue) * 200}px` }}
                  >
                    <span className="transform -rotate-90 whitespace-nowrap">Net Savings</span>
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-900">{formatCurrency(results.netSavings)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What This Means for You</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Time Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reclaim {results.timeReclaimed} hours per week for strategic work</li>
                  <li>• Focus on high-value activities that grow your business</li>
                  <li>• Reduce stress and improve work-life balance</li>
                  <li>• Scale operations without hiring full-time staff</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Financial Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Save {formatCurrency(results.netSavings)} annually</li>
                  <li>• Break even in just {formatNumber(results.breakEvenMonths)} months</li>
                  <li>• No benefits, taxes, or office space costs</li>
                  <li>• Immediate productivity gains</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Saving?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Schedule a free consultation to discuss your specific needs and get matched with your perfect smart VA.
              </p>
              <div className="space-x-4">
                <a
                  href="/schedule-call"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Schedule Free Consultation
                </a>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}