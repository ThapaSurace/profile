import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="container space-y-10">

      <div>
        <h1 className='mb-4'>
          Contact Me
        </h1>
        <p className="">
          Reach out to me over email or fill up this contact form. I will get
          back to you ASAP - I promise.
        </p>
      </div>

      <div>
        <form className='space-y-6'>
            <div className='flex flex-col gap-4 md:flex-row'>
                <Input type="text" placeholder='your name' />
                <Input type="email" placeholder='your email' />
            </div>
            <Textarea placeholder="Type your message here." rows={10} />

            <div>
                <Button className='w-full'>Submit</Button>
            </div>
        </form>
      </div>
 
    </div>
  )
}

export default ContactPage