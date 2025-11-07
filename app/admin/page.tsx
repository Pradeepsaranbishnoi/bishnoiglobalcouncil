"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const [stats] = useState({
    totalUsers: 1250,
    totalJobs: 48,
    totalBusinesses: 32,
    totalEvents: 15,
  })

  const [jobs, setJobs] = useState([
    { id: 1, title: "Senior Developer", company: "Tech Corp", status: "active", applications: 12 },
    { id: 2, title: "Marketing Manager", company: "Brand Co", status: "active", applications: 8 },
    { id: 3, title: "Sales Executive", company: "Sales Inc", status: "pending", applications: 5 },
  ])

  const [businesses, setBusinesses] = useState([
    { id: 1, name: "Organic Farms Ltd", category: "Agriculture", status: "verified", rating: 4.8 },
    { id: 2, name: "Tech Solutions", category: "Technology", status: "pending", rating: 4.5 },
    { id: 3, name: "Craft Bazaar", category: "Handicrafts", status: "verified", rating: 4.9 },
  ])

  const [users, setUsers] = useState([
    { id: 1, name: "Rajesh Kumar", email: "rajesh@example.com", role: "user", joinDate: "2024-01-15" },
    { id: 2, name: "Priya Singh", email: "priya@example.com", role: "user", joinDate: "2024-02-20" },
    { id: 3, name: "Admin User", email: "admin@example.com", role: "admin", joinDate: "2024-01-01" },
  ])

  const handleJobApprove = (id: number) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, status: "active" } : job)))
  }

  const handleBusinessVerify = (id: number) => {
    setBusinesses(businesses.map((biz) => (biz.id === id ? { ...biz, status: "verified" } : biz)))
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage platform content and users</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{stats.totalJobs}</div>
              <p className="text-xs text-muted-foreground mt-1">+5 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Businesses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{stats.totalBusinesses}</div>
              <p className="text-xs text-muted-foreground mt-1">+3 verified</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.totalEvents}</div>
              <p className="text-xs text-muted-foreground mt-1">Upcoming this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="businesses">Businesses</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          {/* Jobs Management */}
          <TabsContent value="jobs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Job Listings</CardTitle>
                <CardDescription>Manage and approve job postings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                        <p className="text-xs text-muted-foreground mt-1">{job.applications} applications</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            job.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {job.status}
                        </span>
                        {job.status === "pending" && (
                          <Button size="sm" onClick={() => handleJobApprove(job.id)}>
                            Approve
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Businesses Management */}
          <TabsContent value="businesses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Business Directory</CardTitle>
                <CardDescription>Verify and manage business listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {businesses.map((business) => (
                    <div
                      key={business.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold">{business.name}</h3>
                        <p className="text-sm text-muted-foreground">{business.category}</p>
                        <p className="text-xs text-muted-foreground mt-1">Rating: {business.rating}/5</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            business.status === "verified"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {business.status}
                        </span>
                        {business.status === "pending" && (
                          <Button size="sm" onClick={() => handleBusinessVerify(business.id)}>
                            Verify
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Management */}
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground mt-1">Joined: {user.joinDate}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {user.role}
                        </span>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management */}
          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Manage news, events, and other content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="w-full">Create News Article</Button>
                    <Button className="w-full">Create Event</Button>
                    <Button className="w-full">Manage Categories</Button>
                    <Button className="w-full">View Analytics</Button>
                  </div>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">5 new job postings submitted</p>
                    <p className="text-muted-foreground">2 business listings pending verification</p>
                    <p className="text-muted-foreground">3 new events created</p>
                    <p className="text-muted-foreground">12 new user registrations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
