import {NavItem, NavItemSelected, NavBar} from '@/constituents/sections/navigational-strip'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
    children: React.ReactNode
  }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavBar>
        <NavItem href="#home" text="Home"/>
        <NavItem href="#home" text="Skills"/>
        <NavItemSelected href="/dashboard" text="Dashboard"/>
      </NavBar>
      {children}
    </section>
  )
}
