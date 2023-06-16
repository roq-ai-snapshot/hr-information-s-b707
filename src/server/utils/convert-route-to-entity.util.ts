const mapping: Record<string, string> = {
  applications: 'application',
  companies: 'company',
  payrolls: 'payroll',
  users: 'user',
  'vacation-requests': 'vacation_request',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
