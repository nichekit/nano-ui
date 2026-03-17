import {createFileRoute, Link} from "@tanstack/react-router";
import Navbar from '~/components/navbar'
import {Button} from "~/components/ui/button";
import Container from "~/components/container";

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Container>
        <Navbar/>
        <main>
          <section className='text-center min-h-screen flex items-center justify-center'>
            <div>
              <h1 className='text-4xl text-primary font-bold mb-4'>NanoUI</h1>
              <div className='text-foreground/60'>A minimal React UI system built around a clean monospace design language.</div>
              <ul className='mt-4'>
                <li className='hover:underline'><a href={'https://github.com/nichekit/nano-ui'} target='_blank'>github:nichekit/nano-ui</a></li>
              </ul>
              <Button className='mt-4' variant={'default'} asChild={true}><Link to={'/docs'}>get started</Link></Button>
            </div>
          </section>
        </main>
      </Container>
    </>
  )
}
