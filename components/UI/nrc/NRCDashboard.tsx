'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  Target,
  TrendingUp,
  FileText,
  Calendar,
  Award,
  Globe
} from 'lucide-react';
import Button from '@/components/Common/Button';
import { useNRCStatus } from '@/lib/hooks/useNRCStatus';
import { getVolunteerNominees, type NomineeProfile } from '@/lib/services/mockNRCService';

interface Nominee {
  id: string;
  name: string;
  category: string;
  country: string;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  dateCreated: string;
  completionScore: number;
}

const NRCDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'nominees' | 'upload'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [nominees, setNominees] = useState<NomineeProfile[]>([]);
  const [loading, setLoading] = useState(false);

  const { volunteer, loading: statusLoading } = useNRCStatus();

  // Load nominees data
  useEffect(() => {
    if (volunteer?.id) {
      loadNominees();
    }
  }, [volunteer?.id]);

  const loadNominees = async () => {
    if (!volunteer?.id) return;

    setLoading(true);
    try {
      const response = await getVolunteerNominees(volunteer.id);
      if (response.success) {
        setNominees(response.data || []);
      }
    } catch (error) {
      console.error('Error loading nominees:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate dashboard stats from real data
  const dashboardStats = {
    totalNominees: nominees.length,
    targetNominees: volunteer?.targetNominees || 200,
    approvedNominees: nominees.filter(n => n.status === 'approved').length,
    pendingReview: nominees.filter(n => n.status === 'submitted').length,
    daysRemaining: Math.max(0, Math.ceil((new Date('2025-08-20').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))),
    completionRate: volunteer?.completionRate || 0
  };

  // Get recent nominees (last 5)
  const recentNominees = nominees
    .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
    .slice(0, 5);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-100';
      case 'submitted': return 'text-blue-600 bg-blue-100';
      case 'draft': return 'text-yellow-600 bg-yellow-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, color = 'text-[#ea580c]' }: {
    icon: any;
    title: string;
    value: string | number;
    subtitle?: string;
    color?: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className={`w-8 h-8 ${color}`} />
        <span className="text-2xl font-bold text-gray-900">{value}</span>
      </div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
    </motion.div>
  );

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Total Nominees"
          value={dashboardStats.totalNominees}
          subtitle={`of ${dashboardStats.targetNominees} target`}
        />
        <StatCard
          icon={CheckCircle}
          title="Approved"
          value={dashboardStats.approvedNominees}
          color="text-green-600"
        />
        <StatCard
          icon={Clock}
          title="Pending Review"
          value={dashboardStats.pendingReview}
          color="text-blue-600"
        />
        <StatCard
          icon={Calendar}
          title="Days Remaining"
          value={dashboardStats.daysRemaining}
          color="text-red-600"
        />
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Research Progress</h3>
          <span className="text-sm text-gray-600">
            {dashboardStats.completionRate}% Complete
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-[#ea580c] to-[#dc2626] h-3 rounded-full transition-all duration-500"
            style={{ width: `${dashboardStats.completionRate}%` }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-[#ea580c]">
              {dashboardStats.totalNominees}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {dashboardStats.targetNominees - dashboardStats.totalNominees}
            </div>
            <div className="text-sm text-gray-600">Remaining</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {Math.round((dashboardStats.totalNominees / dashboardStats.targetNominees) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Target Progress</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Nominees</h3>
        <div className="space-y-4">
          {loading ? (
            <div className="p-4 text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#ea580c] mx-auto"></div>
              <p className="mt-2 text-sm text-gray-600">Loading nominees...</p>
            </div>
          ) : recentNominees.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No nominees uploaded yet. Start by adding your first nominee!
            </div>
          ) : (
            recentNominees.map((nominee) => (
              <div key={nominee.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{nominee.fullName}</h4>
                  <p className="text-sm text-gray-600">{nominee.awardCategory} • {nominee.country}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(nominee.status)}`}>
                    {nominee.status.charAt(0).toUpperCase() + nominee.status.slice(1)}
                  </span>
                  <div className="text-sm text-gray-500">
                    {nominee.completionScore}%
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-4 text-center">
          <Button
            text="View All Nominees"
            onClick={() => setActiveTab('nominees')}
            variant="outline"
            className="border-[#ea580c] text-[#ea580c] hover:bg-[#ea580c] hover:text-white"
          />
        </div>
      </div>
    </div>
  );

  const NomineesTab = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search nominees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea580c] focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea580c] focus:border-transparent appearance-none bg-white"
            >
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="submitted">Submitted</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <Button
            text="Add New Nominee"
            onClick={() => setActiveTab('upload')}
            variant="filled"
            className="bg-[#ea580c] hover:bg-[#dc2626] text-white flex items-center gap-2"
          />
        </div>
      </div>

      {/* Nominees List */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Your Nominees</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ea580c] mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading nominees...</p>
            </div>
          ) : nominees.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No nominees found. Start by uploading your first nominee profile!
            </div>
          ) : (
            nominees
              .filter(nominee => {
                const matchesSearch = nominee.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                   nominee.awardCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                   nominee.country.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesStatus = filterStatus === 'all' || nominee.status === filterStatus;
                return matchesSearch && matchesStatus;
              })
              .map((nominee) => (
            <div key={nominee.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">{nominee.fullName}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(nominee.status)}`}>
                      {nominee.status.charAt(0).toUpperCase() + nominee.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{nominee.awardCategory}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      {nominee.country}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(nominee.dateCreated).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {nominee.completionScore}% Complete
                    </div>
                    <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-[#ea580c] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${nominee.completionScore}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      text="Edit"
                      variant="outline"
                      className="border-[#ea580c] text-[#ea580c] hover:bg-[#ea580c] hover:text-white px-3 py-1 text-sm"
                    />
                    <Button
                      text="View"
                      variant="filled"
                      className="bg-[#ea580c] hover:bg-[#dc2626] text-white px-3 py-1 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
              ))
          )}
        </div>
      </div>
    </div>
  );

  const UploadTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center py-12">
        <Plus className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Add New Nominee</h3>
        <p className="text-gray-600 mb-6">
          Upload a new nominee profile to contribute to the NESA-Africa 2025 research database.
        </p>
        <Button
          text="Start New Nomination"
          variant="filled"
          className="bg-[#ea580c] hover:bg-[#dc2626] text-white px-8 py-3"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NRC Volunteer Dashboard</h1>
              <p className="text-gray-600">
                Welcome back{volunteer?.fullName ? `, ${volunteer.fullName}` : ''}! Track your research progress and manage nominees.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Target Progress</div>
                <div className="text-lg font-semibold text-[#ea580c]">
                  {dashboardStats.totalNominees}/{dashboardStats.targetNominees}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'nominees', label: 'My Nominees', icon: Users },
              { id: 'upload', label: 'Add Nominee', icon: Plus }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#ea580c] text-[#ea580c]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'nominees' && <NomineesTab />}
        {activeTab === 'upload' && <UploadTab />}
      </div>
    </div>
  );
};

export default NRCDashboard;
