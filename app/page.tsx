// Use { } for Named Exports (without a default)
import * as UI from '@/constituents/userinterfaces'
import FastTravel from '@/world/navigation'

export default function Application() {
  return ( <>

    <FastTravel/>

    <UI.Jumbotron
      head='Greetings, this is Mid Hunter'
      body='Creating software and automation with ease just for fun.'
      button1='See More'
      button2='Contact'
    />

    <UI.BentoBox>

      <UI.Bento1
        head='Familiar with tools and technologies such as'
        body='<Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.>'
        href='/'
        button='More Details'
      />

      <div className="grid md:grid-cols-2 gap-8">

        <UI.Bento2
          head='Project 1'
          body='This is an innovative web application designed to streamline the process of collaborative project management.'
          href='/'
          button='Read More'
        />

        <UI.Bento2
          head='Project 2'
          body='This platform offers a comprehensive suite of tools that empower teams to effectively plan, organize, and execute projects of any scale.'
          href='/'
          button='Read More'
        />

        <UI.Bento2
          head='Project 3'
          body='Key features of "Project 1" include intuitive task management, interactive Gantt charts, real-time collaboration, and customizable reporting.'
          href='/'
          button='Read More'
        />

        <UI.Bento2
          head='Project 4'
          body='The platform is designed to enhance team productivity by providing a centralized hub for project communication and documentation.'
          href='/'
          button='Read More'
        />

      </div>

    </UI.BentoBox>

  </>);
}
