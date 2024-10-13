import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, having comprehensive initial conversations to ensure alignment.
        </p>
        <p>
          For web crawling projects or where otherwise necessary, our team will
          conduct a feasability study to ensure that before anything is signed,
          we have good confidence in our ability to execute on the proposed task.
        </p>
        <p>
          Our team of software engineers and technical project managers will work
          together to develop a complete 
          {' '}<strong className="font-semibold text-neutral-950">proposal</strong> 
          {' '}for your review including scope, schedule, fees, and terms.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Comprehensive proposal</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the proposal is signed and deposit received, the build commences immediately.
        </p>
        <p>
          As milestones are reached, you will receive updates via email on progress
          and how the project is progressing related to the initial proposed schedule.
          If unforeseen circumstances lead to delays or warrant a conversation, you can trust
          that we will be in touch to ensure alignment before we proceed further.
        </p>
        <p>
          We strive to deliver excellence in all domains of quality, scalability, reliability,
          and speed of implementation to ensure your organization can achieve your objectives.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Simon', role: 'CEO of Blast Trading App' }}
        className="mt-12"
      >
        Deca Labs was never afraid of my questions and was refreshingly honest in sharing
        the current state of the project and what still needed to be done.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          No project is complete until it has shipped. We will review the final product
          with you to ensure it is complete to your satisfaction. 
        </p>
        <p>
          We will also work closely with your team to handoff any documentation, systems,
          or part of the solution that your team will be managing going forward. This ensures
          an effortless path forward as we wrap up the project and time together.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have sufficient test coverage, which ensures confidence that
          the code we write works, and will continue to work, as expected.
        </ListItem>
        <ListItem title="CI/CD">
          Continuous Integration & Deployment allows us to maintain fast velocity in building
          your solution with tests run on every code merge, and frequent production deploys
          so the latest changes can always be available for QA and manual testing.
        </ListItem>
        <ListItem title="Economic Production Infrastructure">
          Shipping to expensive cloud infrastructure providers lock you in to ongoing monthly bills
          which could run you dry. We always aim to find the most economical production infrastructure
          solution for clients to ensure that your software systems are net beneficial.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in velocity, honest conversations, and shipping quality solutions, fast.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          Our process is consistent project to project, and continues to lead to successful
          outcomes for clients. We strive for velocity in our work, moving quickly. We aim for 
          complete honesty within our team conversations and with clients on proposals, 
          progress, and deliverables so we can avoid any blind spots. 
          We achieve quality without compromising on shipping fast.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      {/* <Values /> */}

      <ContactSection />
    </>
  )
}
