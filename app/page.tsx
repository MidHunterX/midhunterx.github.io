// Use { } for Named Exports (without a default)
import * as UI from '@/constituents/userinterfaces'
import {NavItem, NavItemSelected, NavBar} from '@/constituents/sections/navigational-strip'

export default function Application() {
  return ( <>

    <NavBar>
      <NavItemSelected href="#home" text="Home"/>
      <NavItem href="#home" text="Skills"/>
      <NavItem href="/dashboard" text="Dashboard"/>
    </NavBar>

    <UI.Jumbotron
      head='Greetings, this is Mid Hunter'
      body='Creating software and automation with ease just for fun.'
      button1='See More'
      button2='Hire Me'
    />

    <UI.BentoBox>

      <UI.Bento1
        head='How to quickly deploy a static website'
        body='Static websites are now used to bootstrap lots of websites and
        are becoming the basis for a variety of tools that even influence
        both web designers and developers.'
        button='Read More'
      />

      <div className="grid md:grid-cols-2 gap-8">

        <UI.Bento2
          head='Start with Flowbite Design System'
          body='Static websites are now used to bootstrap lots of websites and
          are becoming the basis for a variety of tools that even influence
          both web designers and developers.'
          button='Read More'
        />

        <UI.Bento2
          head='Best react libraries around the web'
          body='Static websites are now used to bootstrap lots of websites and
          are becoming the basis for a variety of tools that even influence
          both web designers and developers.'
          button='Read More'
        />

      </div>

    </UI.BentoBox>

  </>);
}
