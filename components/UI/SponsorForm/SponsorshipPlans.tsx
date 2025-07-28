'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { FiArrowLeftCircle } from "react-icons/fi";


const plans = [
  {
    name: 'Platinum Package',
    price: 30000,
    details: [
      'Title Sponsor - "Powered by [Your Company]" on all official platforms',
      'Speaking Slot at the Opening Ceremony',
      'Premier Branding on NESA Africa TV, billboards, and digital platforms',
      'Feature Article in International Media & Press Releases',
      '30 VIP Event Passes + Priority Seating',
      'Exclusive Sponsor Interview & Documentary'
    ]
  },
  { name: 'Gold Sponsor', price: 30000 },
  { name: 'Silver Sponsor', price: 30000 },
  { name: 'Bronze Sponsor', price: 30000 },
  { name: 'Category Sponsor', price: 30000 },
  { name: 'Exhibition Sponsor', price: 30000 },
  { name: 'Supporter Package', price: 30000 }
]

export default function SponsorshipPlans({
  selectedPlan,
  onSelect,
  onSubmit,
  onBack
}: {
  selectedPlan?: any
  onSelect: (plan: any) => void
  onSubmit: () => void
  onBack: () => void
}) {
  const [selected, setSelected] = useState(selectedPlan || plans[0])

  return (
    <div className="max-w-3xl pt-24 mx-auto p-6 text-gray-900">
            <div className="mt-6 flex justify-between">
                  <button onClick={onBack} className="flex items-center text-gray-600 mb-8">
                    <FiArrowLeftCircle className="text-3xl mr-2" />
                    <span className="ml-2">Back</span>
                  </button>
        <button
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600"
          onClick={onSubmit}
        >
          Continue to Payment
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Choose your plan</h2>
      <p className="text-sm mb-6">
        Choose your <span className="text-yellow-500 font-semibold">Sponsor</span>ship Package
      </p>

      <RadioGroup value={selected} onChange={(plan) => {
        setSelected(plan)
        onSelect(plan)
      }}>
        <div className="space-y-4">
          {plans.map((plan) => (
            <RadioGroup.Option
              key={plan.name}
              value={plan}
              className={({ checked }) =>
                `relative border rounded-lg p-4 cursor-pointer flex justify-between items-center ${
                  checked ? 'border-yellow-500 bg-yellow-50' : 'border-gray-300'
                }`
              }
            >
              {({ checked }) => (
                <>
                  <div>
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {checked && plan.details && (
                      <ul className="mt-2 text-sm list-disc list-inside text-gray-700">
                        {plan.details.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="text-lg font-bold">${plan.price.toLocaleString()}</div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>


    </div>
  )
}
