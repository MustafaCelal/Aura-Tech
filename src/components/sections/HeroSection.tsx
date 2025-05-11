import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Container } from '@/components/layout/Container';

export function HeroSection() {
  return (
    <Container className="flex flex-col lg:flex-row items-center gap-12 !pt-12 sm:!pt-16 lg:!pt-24">
      <div className="lg:w-1/2 lg:pr-10 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
          Expand Business <br className="hidden sm:inline"/>With a Website
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        
        <div className="mt-10 bg-card p-3 sm:p-4 rounded-xl shadow-xl border">
          <form className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
            <div className="md:col-span-2">
              <Label htmlFor="enterName" className="sr-only">Enter Name</Label>
              <Input type="text" id="enterName" placeholder="Enter Name" className="w-full h-12 text-base" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="websiteType" className="sr-only">Website Type</Label>
              <Select>
                <SelectTrigger id="websiteType" className="w-full h-12 text-base">
                  <SelectValue placeholder="Website Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="portfolio">Portfolio</SelectItem>
                  <SelectItem value="blog">Blog</SelectItem>
                  <SelectItem value="business">Business Website</SelectItem>
                  <SelectItem value="landing_page">Landing Page</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button size="lg" type="submit" className="md:col-span-1 w-full h-12 text-base">Get Started</Button>
          </form>
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="https://picsum.photos/seed/webagencyhero/800/600"
            alt="Person working on a laptop at a desk with abstract elements"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 hover:scale-105"
            data-ai-hint="person laptop desk"
            priority
          />
           <div aria-hidden="true" className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10"></div>
        </div>
      </div>
    </Container>
  );
}
