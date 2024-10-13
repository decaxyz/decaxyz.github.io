import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import blastTradingAppLight from '@/images/clients/blast-trading-app/logo-light.svg'
import blastTradingAppDark from '@/images/clients/blast-trading-app/logo-dark.png'
import logoKotlin from '@/images/clients/kotlin/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoMapleviewDark from '@/images/clients/mapleview/logo-dark.png'
import logoMapleviewLight from '@/images/clients/mapleview/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPressbookDark from '@/images/clients/pressbook/logo-dark.png'
import logoPressbookLight from '@/images/clients/pressbook/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Blast Trading App', blastTradingAppDark],
  ['Mapleview', logoMapleviewDark],
  ['Pressbook', logoPressbookDark],
  ['Kotlin', logoKotlin],
]

export function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {"Don't worry, you're in good company."}
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image className='max-w-36' src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Helping unblock teams with enterprise-grade software solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Teams need capable software solutions to unblock business growth. Deca Labs delivers solutions which have enterprise-grade reliability, scalability, maintainbility, and usability so you can reach your potential.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    className="font-semibold"
                    dateTime={caseStudy.date.split('-')[0]}
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  {caseStudy.endDate && (caseStudy.endDate.split('-')[0] != caseStudy.date.split('-')[0]) && <span>{" – "}<time className="font-semibold" dateTime={caseStudy.endDate.split("-")[0]}>
                    {caseStudy.endDate.split('-')[0]}
                  </time></span>}
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="You have problems. We work with you to build the right solution."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          {"Software may not be your expertise, that's okay! But, it is ours. Bring us your problem, and we'll work with you to land on an approach that fits within your budget, timeline, and objectives."}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Fullstack Applications">
              {"Frontend, Backend, DevOps. We can build end-to-end software solutions that let you display any amount of data in a searchable modern dashboard, all deployed on reliable infrastructure that won't break the bank."}
            </ListItem>
            <ListItem title="Web Crawling">
              {"Not every data set has an open API, but we have years of experience with successfully, efficiently crawling from websites and processing it into human or computer usable data."}
            </ListItem>
            <ListItem title="Landing Pages">
              {"First impressions matter. Let us build a website which will ensure future customers are intrigued and persuaded to signup."}
            </ListItem>
            <ListItem title="Data Pipelines & Migrations">
              {"Many teams already have different SaaS subscriptions, but moving data between vendors can be costly if you do it their way. Let us build a custom pipeline or migration at a fraction of the cost of vendor consultants."}
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We build delightful software solutions with enterprise-grade techniques.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Web Crawling. AI. Crypto. Search. Chat Bots. 10x.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            {"Ship fast, or software that will last? Now, you don't have to choose."}
          </p>
          <p className="mt-6 text-xl text-neutral-600">
            {"Fortune 500 or well-funded startups usually snatch up all the 10x programmers. Turns out, not all of them."}
          </p>
          
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Mapleview' }}
      >
        Deca Labs made our scope come alive. They built an entire automated crawler and dashboard, and it all still works great 2 years later, for us and our users.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
