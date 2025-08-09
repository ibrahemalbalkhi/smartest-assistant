'use client'

import { useState, useEffect } from 'react'
import { H3, H4, Paragraph, Button } from '@/components/ui'

interface ROIInputs {
  hourlyValue: number
  adminHoursPerWeek: number
  vaHourlyCost: number
  vaHoursPerWeek: number
}

interface ROIResults {
  currentWeeklyCost: number
  vaWeeklyCost: number
  weeklySavings: number
  annualSavings: number
  roi: number
  timeReclaimed: number
}

const defaultInputs: ROIInputs = {
  hourlyValue: 150,
  adminHoursPerWeek: 20,
  vaHourlyCost: 30,
  vaHoursPerWeek: 20
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>(defaultInputs)
  const [results, setResults] = useState<ROIResults | null>(null)

  const calculateROI = (inputData: ROIInputs): ROIResults => {
    const currentWeeklyCost = inputData.hourlyValue * inputData.adminHoursPerWeek
    const vaWeeklyCost = inputData.vaHourlyCost * inputData.vaHoursPerWeek
    const weeklySavings = currentWeeklyCost - vaWeeklyCost
    const annualSavings = weeklySavings * 52
    const roi = vaWeeklyCost > 0 ? ((weeklySavings / vaWeeklyCost) * 100) : 0
    const timeReclaimed = inputData.adminHoursPerWeek - inputData.vaHoursPerWeek

    return {
      currentWeeklyCost,
      vaWeeklyCost,
      weeklySavings,
      annualSavings,
      roi,
      timeReclaimed
    }
  }

  useEffect(() => {
    setResults(calculateROI(inputs))
  }, [inputs])

  const handleInputChange = (field: keyof ROIInputs, value: string) => {
    const numValue = parseFloat(value) || 0
    setInputs(prev => ({
      ...prev,
      [field]: numValue
    }))
  }

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8 text-center">
        <H3 className="mb-4">Calculate Your VA ROI</H3>
        <Paragraph>
          See how much time and money you could save with a smart virtual assistant
        </Paragraph>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <H4>Your Current Situation</H4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your hourly value (what you charge/earn per hour)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={inputs.hourlyValue}
                onChange={(e) => handleInputChange('hourlyValue', e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                min="0"
                step="10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hours per week spent on admin tasks
            </label>
            <div className="relative">
              <input
                type="number"
                value={inputs.adminHoursPerWeek}
                onChange={(e) => handleInputChange('adminHoursPerWeek', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                min="0"
                max="168"
                step="1"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">hrs/week</span>
            </div>
          </div>

          <H4 className="pt-4">Smart VA Solution</H4>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              VA hourly rate
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={inputs.vaHourlyCost}
                onChange={(e) => handleInputChange('vaHourlyCost', e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                min="0"
                step="5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              VA hours needed per week
            </label>
            <div className="relative">
              <input
                type="number"
                value={inputs.vaHoursPerWeek}
                onChange={(e) => handleInputChange('vaHoursPerWeek', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                min="0"
                max="168"
                step="1"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">hrs/week</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {results && (
          <div className="space-y-6">
            <H4>Your ROI Results</H4>
            
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="font-semibold text-red-800">Current Weekly Cost</div>
                <div className="text-2xl font-bold text-red-600">
                  {formatCurrency(results.currentWeeklyCost)}
                </div>
                <div className="text-sm text-red-700">
                  Opportunity cost of doing admin work yourself
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="font-semibold text-blue-800">VA Weekly Cost</div>
                <div className="text-2xl font-bold text-blue-600">
                  {formatCurrency(results.vaWeeklyCost)}
                </div>
                <div className="text-sm text-blue-700">
                  Investment in smart virtual assistant
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="font-semibold text-green-800">Weekly Savings</div>
                <div className="text-3xl font-bold text-green-600">
                  {formatCurrency(results.weeklySavings)}
                </div>
                <div className="text-sm text-green-700">
                  Net benefit per week
                </div>
              </div>

              <div className="bg-primary-blue rounded-lg p-4 text-white">
                <div className="font-semibold">Annual Savings</div>
                <div className="text-3xl font-bold">
                  {formatCurrency(results.annualSavings)}
                </div>
                <div className="text-sm text-blue-100">
                  Total yearly financial impact
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent-amber rounded-lg p-4 text-white text-center">
                  <div className="text-2xl font-bold">
                    {Math.round(results.roi)}%
                  </div>
                  <div className="text-sm">ROI</div>
                </div>
                
                <div className="bg-purple-600 rounded-lg p-4 text-white text-center">
                  <div className="text-2xl font-bold">
                    {results.timeReclaimed}
                  </div>
                  <div className="text-sm">Hours Reclaimed</div>
                </div>
              </div>

              {results.weeklySavings > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="font-semibold text-green-800 mb-2">✅ What This Means:</div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Reclaim {results.timeReclaimed} hours weekly for high-value work</li>
                    <li>• Save {formatCurrency(results.weeklySavings)} per week in opportunity cost</li>
                    <li>• Generate {formatCurrency(results.annualSavings)} in additional value annually</li>
                    <li>• Focus on growth while VA handles operations</li>
                  </ul>
                </div>
              )}

              <div className="text-center pt-4">
                <Button as="link" href="/schedule-a-call" size="lg" className="w-full">
                  Get Your Smart VA Match
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Preset Scenarios */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <H4 className="mb-4">Quick Scenarios</H4>
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={() => setInputs({ hourlyValue: 75, adminHoursPerWeek: 15, vaHourlyCost: 25, vaHoursPerWeek: 15 })}
            className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="font-semibold">Small Business Owner</div>
            <div className="text-sm text-gray-600">$75/hr • 15hrs admin weekly</div>
          </button>
          
          <button
            onClick={() => setInputs({ hourlyValue: 150, adminHoursPerWeek: 25, vaHourlyCost: 30, vaHoursPerWeek: 25 })}
            className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="font-semibold">Executive/Consultant</div>
            <div className="text-sm text-gray-600">$150/hr • 25hrs admin weekly</div>
          </button>
          
          <button
            onClick={() => setInputs({ hourlyValue: 250, adminHoursPerWeek: 30, vaHourlyCost: 35, vaHoursPerWeek: 30 })}
            className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="font-semibold">Senior Executive/Founder</div>
            <div className="text-sm text-gray-600">$250/hr • 30hrs admin weekly</div>
          </button>
        </div>
      </div>
    </div>
  )
}