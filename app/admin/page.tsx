export default function Home() {
  const employees = [
    {
      name: "Anatomic Belik",
      jobTitle: "Head of Design",
      department: "Product",
      site: "Stockholm",
      salary: "$1,350",
      startDate: "Mar 13, 2023",
      lifecycle: "Hired",
      status: "Invited",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      name: "Ksenia Bator",
      jobTitle: "Fullstack Engineer",
      department: "Engineering",
      site: "Miami",
      salary: "$1,500",
      startDate: "Oct 13, 2023",
      lifecycle: "Hired",
      status: "Absent",
      statusColor: "bg-red-100 text-red-800"
    },
    {
      name: "Bogdan Nikitin",
      jobTitle: "Mobile Lead",
      department: "Product",
      site: "Kyiv",
      salary: "$2,600",
      startDate: "Nov 4, 2023",
      lifecycle: "Employed",
      status: "Invited",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      name: "Arsen Yatsenko",
      jobTitle: "Sales Manager",
      department: "Operations",
      site: "Ottawa",
      salary: "$900",
      startDate: "Sep 4, 2021",
      lifecycle: "Employed",
      status: "Invited",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      name: "Daria Yurchenko",
      jobTitle: "Network engineer",
      department: "Product",
      site: "Sao Paulo",
      salary: "$1,000",
      startDate: "Feb 21, 2023",
      lifecycle: "Hired",
      status: "Invited",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      name: "Yulia Polishchuk",
      jobTitle: "Head of Design",
      department: "Product",
      site: "London",
      salary: "$1,700",
      startDate: "Aug 2, 2024",
      lifecycle: "Employed",
      status: "Absent",
      statusColor: "bg-red-100 text-red-800"
    }
  ];

  const tabs = ["Columns", "Department", "Site", "Lifecycle", "Status", "Entity", "Search"];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Crextio</h1>
          <p className="text-gray-600 mt-2">People management dashboard</p>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* People Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">People</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">Interviews</span>
                  <span className="font-semibold">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">Hired</span>
                  <span className="font-semibold">51%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '51%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Time Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Project time</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">Output</span>
                  <span className="font-semibold">10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">Productivity</span>
                  <span className="font-semibold">14%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '14%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Empty Card for spacing */}
          <div className="bg-white rounded-xl shadow-sm p-6 opacity-0 md:opacity-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Metrics</h3>
            <div className="text-gray-500 text-sm">
              More metrics coming soon...
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${index === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Table Headers */}
          <div className="hidden md:grid grid-cols-8 gap-4 p-6 border-b border-gray-200 bg-gray-50">
            <div className="col-span-2 font-medium text-gray-700">Name</div>
            <div className="font-medium text-gray-700">Job title</div>
            <div className="font-medium text-gray-700">Department</div>
            <div className="font-medium text-gray-700">Site</div>
            <div className="font-medium text-gray-700">Salary</div>
            <div className="font-medium text-gray-700">Start date</div>
            <div className="font-medium text-gray-700">Status</div>
          </div>

          {/* Mobile Table Headers */}
          <div className="md:hidden grid grid-cols-2 gap-4 p-4 border-b border-gray-200 bg-gray-50">
            <div className="font-medium text-gray-700">Employee Details</div>
            <div className="font-medium text-gray-700 text-right">Status & Actions</div>
          </div>

          {/* Employee Rows */}
          <div className="divide-y divide-gray-200">
            {employees.map((employee, index) => (
              <div key={index} className="p-4 md:p-6 hover:bg-gray-50 transition-colors">
                {/* Desktop View */}
                <div className="hidden md:grid grid-cols-8 gap-4 items-center">
                  <div className="col-span-2">
                    <div className="font-medium text-gray-900">{employee.name}</div>
                    <div className="text-sm text-gray-500">{employee.jobTitle}</div>
                  </div>
                  <div className="text-gray-700">{employee.jobTitle}</div>
                  <div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {employee.department}
                    </span>
                  </div>
                  <div className="text-gray-700">{employee.site}</div>
                  <div className="text-gray-700 font-medium">{employee.salary}</div>
                  <div className="text-gray-700">{employee.startDate}</div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${employee.statusColor}`}>
                      {employee.status}
                    </span>
                  </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-gray-900">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.jobTitle}</div>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center">
                          <span className="text-gray-600 text-sm w-20">Department:</span>
                          <span className="text-gray-700">{employee.department}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 text-sm w-20">Site:</span>
                          <span className="text-gray-700">{employee.site}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 text-sm w-20">Salary:</span>
                          <span className="text-gray-700 font-medium">{employee.salary}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 text-sm w-20">Start Date:</span>
                          <span className="text-gray-700">{employee.startDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium mb-4 ${employee.statusColor}`}>
                        {employee.status}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {employee.lifecycle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Crextio People Dashboard • Showing {employees.length} employees</p>
        </footer>
      </div>
    </div>
  );
}