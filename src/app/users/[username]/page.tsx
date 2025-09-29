import CardList from '@/components/CardList'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import React from 'react'
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AppLineChart from '@/components/AppLineChart'

const SingleUserPage = ({ params }: { params: { username?: string | undefined } }) => {

  const { username } = params

  return (
    <div className=''>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/payments">Payments</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{username ? username.charAt(0).toUpperCase() + username.slice(1) : 'Unknown User'}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-6">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-4">
          {/* user badges container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="font-medium text-lg mb-4">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-1.5' />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Verified User</h1>
                  <p className='text-sm text-muted-foreground'>This user has been verified by the admin.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* information container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className='flex items-center justify-between'>
              <h1 className="font-medium text-lg mb-4">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">Profile Completion</p>
                <Progress value={75} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">Username:</span>
                <span className="">show.sam</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">Email:</span>
                <span className="">showsam@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">Phone:</span>
                <span className="">+234-906-187-35-60</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">Location:</span>
                <span className="">Ikeja, Lagos.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className='tet-sm text-muted-foreground mt-4'>Joined on {new Date().toLocaleDateString()}</p>
          </div>
          {/* card list  container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title='Recent Transactions' />
          </div>
        </div>
        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* user card container */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className='size-12'>
                <AvatarImage src={'https://avatars.githubusercontent.com/u/1486366'} />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
              <h1 className='font-semibold text-xl '>Sam Show</h1>
            </div>
            <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque vel at reiciendis rem, natus, ab quod voluptatibus asperiores repellat esse harum blanditiis voluptates aperiam quidem ratione accusantium exercitationem suscipit.</p>
          </div>
          {/* chart container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="font-medium text-lg mb-4 ml-10">User Activities</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleUserPage
