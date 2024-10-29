import React, { useState } from 'react';
import { Plus, Trash2, RefreshCw } from 'lucide-react';
import toast from 'react-hot-toast';

interface Material {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  pricePerUnit: number;
}

const MaterialEstimator = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([
    'Lumber 2x4', 'Concrete Mix', 'Steel Beams', 'Drywall Sheets'
  ]);

  const addMaterial = () => {
    const newMaterial: Material = {
      id: Date.now().toString(),
      name: '',
      quantity: 0,
      unit: 'pieces',
      pricePerUnit: 0
    };
    setMaterials([...materials, newMaterial]);
  };

  const removeMaterial = (id: string) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  const updateMaterial = (id: string, field: keyof Material, value: string | number) => {
    setMaterials(materials.map(m => 
      m.id === id ? { ...m, [field]: value } : m
    ));
  };

  const refreshPrices = () => {
    // Simulate API call to get updated prices
    toast.success('Material prices updated with latest market data');
  };

  const calculateTotal = () => {
    return materials.reduce((sum, material) => 
      sum + (material.quantity * material.pricePerUnit), 0
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Material Estimator</h1>
        <div className="space-x-4">
          <button
            onClick={refreshPrices}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Refresh Prices</span>
          </button>
          <button
            onClick={addMaterial}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add Material</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-6">
          {materials.map((material) => (
            <div key={material.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <input
                  type="text"
                  value={material.name}
                  onChange={(e) => updateMaterial(material.id, 'name', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Material name"
                  list={`suggestions-${material.id}`}
                />
                <datalist id={`suggestions-${material.id}`}>
                  {suggestions.map((suggestion) => (
                    <option key={suggestion} value={suggestion} />
                  ))}
                </datalist>
              </div>
              
              <input
                type="number"
                value={material.quantity}
                onChange={(e) => updateMaterial(material.id, 'quantity', parseFloat(e.target.value))}
                className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Qty"
              />
              
              <select
                value={material.unit}
                onChange={(e) => updateMaterial(material.id, 'unit', e.target.value)}
                className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="pieces">Pieces</option>
                <option value="sq_ft">Sq. Ft.</option>
                <option value="cu_yd">Cu. Yd.</option>
                <option value="linear_ft">Linear Ft.</option>
              </select>
              
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  value={material.pricePerUnit}
                  onChange={(e) => updateMaterial(material.id, 'pricePerUnit', parseFloat(e.target.value))}
                  className="w-32 pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Price"
                />
              </div>
              
              <div className="w-32 text-right font-medium">
                ${(material.quantity * material.pricePerUnit).toFixed(2)}
              </div>
              
              <button
                onClick={() => removeMaterial(material.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}

          {materials.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No materials added yet. Click "Add Material" to get started.</p>
            </div>
          )}

          {materials.length > 0 && (
            <div className="flex justify-end items-center pt-6 border-t border-gray-200">
              <div className="text-right">
                <p className="text-sm text-gray-500">Total Estimate</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${calculateTotal().toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Cost Optimization Suggestions</h3>
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>Consider bulk ordering lumber to save 15% on unit price</li>
              <li>Local supplier offering competitive rates on concrete mix</li>
              <li>Alternative material suggestion: Engineered wood beams</li>
            </ul>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Market Insights</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              <li>Lumber prices expected to decrease by 8% next month</li>
              <li>Steel prices currently at 6-month low</li>
              <li>New eco-friendly alternatives available for drywall</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialEstimator;