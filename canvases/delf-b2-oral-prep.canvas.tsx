import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useHostTheme,
} from 'cursor/canvas';

function ChapterHeader({ num, title, subtitle }: { num: string; title: string; subtitle?: string }) {
  const theme = useHostTheme();
  return (
    <Stack gap={2} style={{ borderLeft: `4px solid ${theme.accent.primary}`, paddingLeft: 16, marginBottom: 4 }}>
      <Text size="small" tone="tertiary" weight="semibold" style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        Chapter {num}
      </Text>
      <H2>{title}</H2>
      {subtitle && <Text size="small" tone="secondary">{subtitle}</Text>}
    </Stack>
  );
}

function SectionLabel({ children }: { children: string }) {
  const theme = useHostTheme();
  return (
    <Text
      size="small"
      weight="semibold"
      style={{ color: theme.accent.primary, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}
    >
      {children}
    </Text>
  );
}

function Step({ num, title, duration, children }: { num: number; title: string; duration: string; children: React.ReactNode }) {
  const theme = useHostTheme();
  return (
    <Stack gap={8} style={{ borderLeft: `3px solid ${theme.stroke.primary}`, paddingLeft: 14 }}>
      <Row gap={8} align="center">
        <div style={{
          width: 24, height: 24, borderRadius: '50%',
          background: theme.accent.primary,
          color: theme.text.primary,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700, flexShrink: 0,
        }}>
          {num}
        </div>
        <Stack gap={0}>
          <Text weight="semibold">{title}</Text>
          <Text size="small" tone="tertiary">{duration}</Text>
        </Stack>
      </Row>
      {children}
    </Stack>
  );
}

function PhraseBox({ label, phrases }: { label: string; phrases: string[] }) {
  const theme = useHostTheme();
  return (
    <Stack gap={6} style={{ background: theme.fill.secondary, borderRadius: 6, padding: '10px 14px' }}>
      <Text size="small" weight="semibold">{label}</Text>
      {phrases.map((p) => (
        <Text key={p} size="small" tone="secondary" italic>{p}</Text>
      ))}
    </Stack>
  );
}

const examples = [
  {
    topic: 'Education',
    title: 'Is school asking too much of parents?',
    problematique: 'Should parents be increasingly involved in their children\'s schooling, or does this undermine the authority of teachers?',
    plan: [
      { label: 'Introduction', text: 'Article from La Croix on parent-school cooperation. Problem stated + plan announced.' },
      { label: 'Argument 1 (+)', text: 'Co-education benefits the child — example of Scandinavian countries with active parental involvement.' },
      { label: 'Argument 2 (−)', text: 'Overburdened parents: stress, pressure, intrusion on family life.' },
      { label: 'Conclusion', text: 'A middle ground: cooperation by choice, not obligation. Each party stays in their role.' },
    ],
    strengths: ['Clear introduction with cited source and formulated problem', 'Advantages/disadvantages structure with explicit connectors', 'Interaction: concession ("I understand that argument") + personal example'],
    improve: ['Avoid using "indeed" / "however" twice in a row', 'Make transitions more formal (On one hand… On the other hand…)'],
    interaction: [
      { q: 'What do you think of the teacher\'s argument that parental involvement is normal but unequal?', r: 'I understand that argument, however you can\'t impose such participation — not all parents have the same means. It\'s better to encourage than to force.' },
    ],
  },
  {
    topic: 'Remote Work',
    title: 'Should remote work be encouraged?',
    problematique: 'Is remote work beneficial or problematic for employees and society?',
    plan: [
      { label: 'Introduction', text: 'Survey: majority of French workers support remote work. Problem stated.' },
      { label: 'Argument 1 (+)', text: 'Economic and time savings, less pollution — personal example: sister avoids traffic.' },
      { label: 'Argument 2 (−)', text: 'Loneliness, blurred work/life boundary — example: friend interrupted during a call.' },
      { label: 'Conclusion', text: '1–2 days/week with clear objectives: keep the benefits, limit the risks.' },
    ],
    strengths: ['Clear and well-balanced structure', 'Concrete personal examples (sister, friend)', 'Nuanced conclusion with a precise framework'],
    improve: ['Vary sentence structures (repeated use of "for example", "advantages")', 'Add "on one hand… on the other hand…" to better connect sections'],
    interaction: [],
  },
  {
    topic: 'Technology',
    title: 'Does technology increase our stress levels?',
    problematique: 'Do digital tools make our daily lives easier, or do they generate harmful stress and dependencies?',
    plan: [
      { label: 'Introduction', text: 'Topic: growing role of technology. Clear problem formulated.' },
      { label: 'Argument 1 (+)', text: 'Information access, remote work, social connections — example: pandemic + online university lectures.' },
      { label: 'Argument 2 (−)', text: 'Mental overload, hyperconnectivity, pressure to answer emails outside work hours.' },
      { label: 'Conclusion', text: 'Learn to disconnect: screen-free time slots, take control of technology use.' },
    ],
    strengths: ['Very varied connectors (First, However, In short…)', 'Reference to a statistic (69% of satisfied workers)', 'Actionable, concrete conclusion'],
    improve: ['Explicitly mention the document source in the introduction', 'Add a formal connector at the start of each section'],
    interaction: [],
  },
  {
    topic: 'Media & Social Networks',
    title: 'Do social networks promote freedom of expression?',
    problematique: 'Are social networks a tool for freedom or a vector of manipulation?',
    plan: [
      { label: 'Introduction', text: 'Influence on democracy. Problem: freedom vs. manipulation.' },
      { label: 'Argument 1 (+)', text: 'Voice for minorities, unfiltered citizen expression — examples of filmed social movements.' },
      { label: 'Argument 2 (−)', text: 'Filter bubbles, fake news, cyberbullying — studies on misinformation spread.' },
      { label: 'Conclusion', text: 'Powerful tool but requires media literacy: verify, respect, educate.' },
    ],
    strengths: ['Varied technical vocabulary (misinformation, polarization, filter bubble)', 'Well-articulated balanced plan', 'Concrete solution proposed in conclusion'],
    improve: ['Include personal or local examples', 'Add a transition phrase before the conclusion (In sum…)'],
    interaction: [],
  },
  {
    topic: 'Integration',
    title: 'Is a foreign accent an obstacle to integration?',
    problematique: 'Does a foreign accent constitute a real handicap in France, or is it a normal and even valued aspect?',
    plan: [
      { label: 'Introduction', text: 'Role of accent in perception of non-native speakers. Nuanced problem stated.' },
      { label: 'Argument 1 (−)', text: 'Communication difficulties, professional prejudice — example of a Latin American friend.' },
      { label: 'Argument 2 (+)', text: 'Accent = identity, charm, social tolerance — personal example (Marseille accent).' },
      { label: 'Conclusion', text: 'Promote intercultural openness, awareness workshops on linguistic diversity.' },
    ],
    strengths: ['Nuanced argumentation with genuine concession', 'Credible and varied personal anecdotes', 'Personal opinion clearly stated (As far as I\'m concerned…)'],
    improve: ['Reduce repetition of the word "accent" (synonyms: intonation, regional accent…)', 'Add more structuring connectors throughout'],
    interaction: [],
  },
];

export default function DELFBook() {
  const theme = useHostTheme();

  return (
    <Stack gap={0} style={{ maxWidth: 900, margin: '0 auto', padding: '32px 28px' }}>

      {/* ── COVER ── */}
      <Stack gap={16} style={{ paddingBottom: 36 }}>
        <Stack gap={4}>
          <Text size="small" tone="tertiary" weight="semibold" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Official Preparation Guide · CIEP / France Éducation International
          </Text>
          <H1>DELF B2 — Oral Production</H1>
          <Text tone="secondary">
            Exam format · Argumentation methods · Corrected examples · 8–12 week study plan · Annotated resources
          </Text>
        </Stack>

        <Grid columns={4} gap={12}>
          <Stat value="20 min" label="Face-to-face duration" />
          <Stat value="30 min" label="Preparation time" />
          <Stat value="50/100" label="Minimum score required" tone="warning" />
          <Stat value="5/25" label="Minimum per section" tone="danger" />
        </Grid>

        <Callout tone="neutral">
          <Text size="small">
            This guide covers <Text weight="semibold" as="span">both parts of the oral exam</Text>: the extended monologue (5–7 min) and the interactive debate with the examiner (10–13 min). It is structured as a training manual — read it from start to finish or go directly to the chapter you need.
          </Text>
        </Callout>
      </Stack>

      <Divider />

      {/* ── CHAPTER 1 — THE EXAM ── */}
      <Stack gap={20} style={{ paddingTop: 36, paddingBottom: 36 }}>
        <ChapterHeader num="1" title="The Official Exam" subtitle="Format, structure and scoring criteria" />

        <SectionLabel>1.1 — The two parts</SectionLabel>
        <Grid columns={2} gap={16}>
          <Card>
            <CardHeader trailing={<Pill tone="info" size="sm">5–7 min</Pill>}>
              Part 1 — Extended Monologue
            </CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">The examiner gives you a written document (newspaper article, interview extract, opinion piece). You must:</Text>
                <Text size="small">• Identify the <Text weight="semibold" as="span">key issue</Text> raised by the document</Text>
                <Text size="small">• Present your opinion in a <Text weight="semibold" as="span">clear, structured</Text> way</Text>
                <Text size="small">• Organize your speech (intro – development – conclusion)</Text>
                <Text size="small" tone="tertiary" italic>You choose 1 topic from 2 drawn at random.</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader trailing={<Pill tone="warning" size="sm">10–13 min</Pill>}>
              Part 2 — Interaction / Debate
            </CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">The examiner engages in a discussion. You must:</Text>
                <Text size="small">• <Text weight="semibold" as="span">Defend</Text> your point of view against questions</Text>
                <Text size="small">• <Text weight="semibold" as="span">Nuance and concede</Text> where appropriate</Text>
                <Text size="small">• <Text weight="semibold" as="span">React</Text> to arguments with relevance and politeness</Text>
                <Text size="small" tone="tertiary" italic>Goal: communicate spontaneously without appearing limited.</Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>

        <SectionLabel>1.2 — Official scoring grid (25 points)</SectionLabel>
        <Table
          striped
          headers={['Criterion', 'Points', 'What is assessed']}
          rows={[
            ['Task completion — Monologue', '5 pts', 'Clear problem statement, logical plan, 2–3 illustrated arguments'],
            ['Task completion — Interaction', '5 pts', 'Responsiveness, defense and nuance of viewpoint'],
            ['Vocabulary (Lexique)', '5 pts', 'Range of vocabulary, relevance of terms, few repetitions'],
            ['Grammar (Morphosyntaxe)', '5 pts', 'Complex structures (subjunctive, agreements), rare errors'],
            ['Pronunciation', '5 pts', 'Intelligibility, natural intonation, overall fluency'],
          ]}
          columnAlign={['left', 'center', 'left']}
        />

        <Callout tone="danger" title="Elimination rule">
          <Text size="small">
            Candidates must score <Text weight="semibold" as="span">at least 5/25 in each section</Text> (oral, written, etc.) and a total of <Text weight="semibold" as="span">50/100</Text> across the full exam — otherwise they are eliminated regardless of other scores.
          </Text>
        </Callout>

        <Callout tone="info" title="What examiners really want to see">
          <Stack gap={4}>
            <Text size="small">• A <Text weight="semibold" as="span">structured</Text> speech — not read aloud, not memorized word-for-word</Text>
            <Text size="small">• <Text weight="semibold" as="span">Nuanced arguments</Text> supported by concrete examples</Text>
            <Text size="small">• <Text weight="semibold" as="span">Natural communication</Text> — better to speak calmly than reach for overly complex phrasing</Text>
            <Text size="small">• The <Text weight="semibold" as="span">ability to react</Text> rather than recite a "correct" answer</Text>
          </Stack>
        </Callout>
      </Stack>

      <Divider />

      {/* ── CHAPTER 2 — METHODS ── */}
      <Stack gap={20} style={{ paddingTop: 36, paddingBottom: 36 }}>
        <ChapterHeader num="2" title="Methods & Tools" subtitle="Speech models, connectors and essential expressions" />

        <SectionLabel>2.1 — Monologue model</SectionLabel>
        <Text tone="secondary" size="small">
          A successful B2 monologue always follows the same 3-step architecture. Respect the order and the timing.
        </Text>

        <Stack gap={16}>
          <Step num={1} title="Introduction" duration="approx. 1 minute">
            <Grid columns={2} gap={12}>
              <PhraseBox
                label="What to do"
                phrases={[
                  '• Cite the source (title, author, date)',
                  '• Reformulate the core issue',
                  '• Briefly announce your plan',
                ]}
              />
              <PhraseBox
                label="Model phrases"
                phrases={[
                  '"This article from [source] presents…"',
                  '"We can therefore ask ourselves whether…"',
                  '"I will first address X, then Y."',
                ]}
              />
            </Grid>
            <Callout tone="success" title="Pro tip">
              <Text size="small">Draft your introduction during the 30-minute preparation time. Starting with a prepared opening builds confidence for everything that follows.</Text>
            </Callout>
          </Step>

          <Step num={2} title="Development" duration="6 to 8 minutes">
            <Grid columns={2} gap={12}>
              <PhraseBox
                label="What to do"
                phrases={[
                  '• 2 to 3 clear, distinct arguments',
                  '• Each argument illustrated with an example',
                  '• Explicit transitions between sections',
                  '• Vary logical connectors',
                ]}
              />
              <PhraseBox
                label="Useful transitions"
                phrases={[
                  '"On one hand… On the other hand…"',
                  '"I covered X, let\'s now look at Y."',
                  '"However… / In contrast… / Yet…"',
                  '"This is compounded by the fact that…"',
                ]}
              />
            </Grid>
            <Callout tone="neutral">
              <Text size="small">
                <Text weight="semibold" as="span">Golden rule:</Text> it is better to fully develop 2 arguments with examples than to list 5 superficially. Quality {'>'} quantity.
              </Text>
            </Callout>
          </Step>

          <Step num={3} title="Conclusion" duration="approx. 1 minute">
            <Grid columns={2} gap={12}>
              <PhraseBox
                label="What to do"
                phrases={[
                  '• Answer the problem you posed',
                  '• Summarize your final opinion',
                  '• Open onto a broader perspective',
                ]}
              />
              <PhraseBox
                label="Model phrases"
                phrases={[
                  '"In conclusion, as far as I\'m concerned…"',
                  '"It therefore seems clear to me that…"',
                  '"To go further, one could also consider…"',
                ]}
              />
            </Grid>
          </Step>
        </Stack>

        <SectionLabel>2.2 — Debate techniques</SectionLabel>
        <Text tone="secondary" size="small">
          In Part 2, the examiner is assessing your <Text weight="semibold" as="span">reactivity</Text> and ability to defend a position with nuance — not your ability to find the "right" answer to everything.
        </Text>

        <Table
          striped
          headers={['Strategy', 'Example phrase']}
          rows={[
            ['Organized reply', '"First, I would like to say that… Then… Finally…"'],
            ['Partial agreement', '"I agree with you on X, but on the other hand…"'],
            ['Polite disagreement', '"I don\'t entirely share that view, because…"'],
            ['Nuancing', '"You have a point, however I think that… / Granted, but…"'],
            ['Conceding', '"That\'s true, I must acknowledge that… nevertheless…"'],
            ['Buying time', '"That\'s a good question, let me think… / Well… let\'s say…"'],
            ['Asking for clarification', '"I\'m sorry, I didn\'t quite follow — could you clarify?"'],
            ['Reformulating the question', '"So you\'re asking me whether… is that right?"'],
            ['Defending your stance', '"Actually, I maintain that… Because in my view, for instance…"'],
          ]}
        />

        <SectionLabel>2.3 — Logical connectors by category</SectionLabel>
        <Grid columns={3} gap={12}>
          {[
            { cat: 'Introducing', items: ['First of all,', 'To begin with,', 'It should be noted that', 'Right from the start,'] },
            { cat: 'Adding', items: ['Moreover,', 'Furthermore,', 'In addition,', 'What\'s more,', 'Added to this is'] },
            { cat: 'Opposing', items: ['However,', 'Nevertheless,', 'On the other hand,', 'Yet,', 'That said,'] },
            { cat: 'Illustrating', items: ['For example,', 'This is the case with', 'As an illustration,', 'Thus,', 'Notably,'] },
            { cat: 'Conceding', items: ['Admittedly,', 'It is true that', 'Even though', 'Even if', 'Without denying that'] },
            { cat: 'Concluding', items: ['In conclusion,', 'To sum up,', 'All in all,', 'Ultimately,', 'In the end,'] },
          ].map(({ cat, items }) => (
            <Card key={cat}>
              <CardHeader>{cat}</CardHeader>
              <CardBody>
                <Stack gap={3}>
                  {items.map((item) => (
                    <Text key={item} size="small" tone="secondary">{item}</Text>
                  ))}
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Grid>

        <SectionLabel>2.4 — Expressing and nuancing your opinion</SectionLabel>
        <Grid columns={3} gap={12}>
          <Stack gap={6}>
            <Text size="small" weight="semibold">Asserting a view</Text>
            <Text size="small" tone="secondary" italic>"In my opinion…"</Text>
            <Text size="small" tone="secondary" italic>"As I see it… / For me…"</Text>
            <Text size="small" tone="secondary" italic>"I am convinced that…"</Text>
            <Text size="small" tone="secondary" italic>"It seems obvious to me that…"</Text>
            <Text size="small" tone="secondary" italic>"As far as I'm concerned…"</Text>
          </Stack>
          <Stack gap={6}>
            <Text size="small" weight="semibold">Expressing doubt</Text>
            <Text size="small" tone="secondary" italic>"I'm not entirely sure that…"</Text>
            <Text size="small" tone="secondary" italic>"It seems to me that…"</Text>
            <Text size="small" tone="secondary" italic>"One could wonder whether…"</Text>
            <Text size="small" tone="secondary" italic>"I'm not certain that…"</Text>
            <Text size="small" tone="secondary" italic>"To a certain extent…"</Text>
          </Stack>
          <Stack gap={6}>
            <Text size="small" weight="semibold">Nuancing</Text>
            <Text size="small" tone="secondary" italic>"On one hand… on the other…"</Text>
            <Text size="small" tone="secondary" italic>"While acknowledging that…"</Text>
            <Text size="small" tone="secondary" italic>"Without going so far as to say…"</Text>
            <Text size="small" tone="secondary" italic>"This needs to be nuanced: if on one side…"</Text>
            <Text size="small" tone="secondary" italic>"That's not entirely accurate because…"</Text>
          </Stack>
        </Grid>
      </Stack>

      <Divider />

      {/* ── CHAPTER 3 — CORRECTED EXAMPLES ── */}
      <Stack gap={20} style={{ paddingTop: 36, paddingBottom: 36 }}>
        <ChapterHeader
          num="3"
          title="Corrected Sample Speeches"
          subtitle="5 typical DELF B2 topics with speech plan, strengths and areas for improvement"
        />

        <Callout tone="neutral">
          <Text size="small">
            These examples illustrate the principles from Chapter 2. For each topic: the core question, the detailed plan, and a critical analysis (strengths + areas to improve). Use them as models for your practice sessions.
          </Text>
        </Callout>

        <Stack gap={8}>
          {examples.map((ex, i) => (
            <Card key={i} collapsible defaultOpen={i === 0}>
              <CardHeader trailing={<Pill size="sm" tone="neutral">{ex.topic}</Pill>}>
                Example {i + 1} — {ex.title}
              </CardHeader>
              <CardBody>
                <Stack gap={14}>
                  <Stack gap={4}>
                    <Text size="small" weight="semibold">Central question (Problématique)</Text>
                    <Text size="small" tone="secondary" italic>{ex.problematique}</Text>
                  </Stack>

                  <Stack gap={6}>
                    <Text size="small" weight="semibold">Speech plan</Text>
                    <Table
                      headers={['Step', 'Content']}
                      rows={ex.plan.map((p) => [
                        <Text key={p.label} size="small" weight="semibold">{p.label}</Text>,
                        <Text key={p.text} size="small">{p.text}</Text>,
                      ])}
                    />
                  </Stack>

                  <Grid columns={2} gap={14}>
                    <Stack gap={6}>
                      <Text size="small" weight="semibold">Strengths</Text>
                      {ex.strengths.map((s, j) => (
                        <Row key={j} gap={6} align="start">
                          <Pill size="sm" tone="success">+</Pill>
                          <Text size="small">{s}</Text>
                        </Row>
                      ))}
                    </Stack>
                    <Stack gap={6}>
                      <Text size="small" weight="semibold">Areas to improve</Text>
                      {ex.improve.map((s, j) => (
                        <Row key={j} gap={6} align="start">
                          <Pill size="sm" tone="warning">~</Pill>
                          <Text size="small">{s}</Text>
                        </Row>
                      ))}
                    </Stack>
                  </Grid>

                  {ex.interaction.length > 0 && (
                    <Stack gap={6}>
                      <Text size="small" weight="semibold">Interaction extract</Text>
                      {ex.interaction.map((it, j) => (
                        <Stack key={j} gap={4} style={{ borderLeft: `2px solid ${theme.stroke.secondary}`, paddingLeft: 10 }}>
                          <Text size="small" tone="tertiary" italic>Examiner: "{it.q}"</Text>
                          <Text size="small">Candidate: "{it.r}"</Text>
                        </Stack>
                      ))}
                    </Stack>
                  )}
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Stack>
      </Stack>

      <Divider />

      {/* ── CHAPTER 4 — SELF-EVALUATION ── */}
      <Stack gap={20} style={{ paddingTop: 36, paddingBottom: 36 }}>
        <ChapterHeader num="4" title="Self-Evaluation Grid" subtitle="To complete after every practice session" />

        <Text tone="secondary" size="small">
          After each training session, score yourself out of 5 for each criterion. The B2 target is <Text weight="semibold" as="span">4/5 on most criteria</Text>.
        </Text>

        <Table
          striped
          headers={['Criterion', 'B2 target description', '/5']}
          rows={[
            ['Monologue coherence', 'Clear problem, logical 3-part plan, visible transitions', ''],
            ['Argumentation', '2–3 fully developed arguments, each illustrated with a concrete example', ''],
            ['Vocabulary', 'Range and relevance of terms, few repetitions, idiomatic expressions', ''],
            ['Grammar', 'Complex structures mastered (subjunctive, agreements), rare and non-distracting errors', ''],
            ['Pronunciation', 'Clear sounds, natural intonation, smooth rhythm, well-placed pauses', ''],
            ['Interaction', 'Active listening, relevant replies, ability to nuance and manage turn-taking', ''],
          ]}
          columnAlign={['left', 'left', 'center']}
        />

        <SectionLabel>Fluency checklist</SectionLabel>
        <Grid columns={2} gap={12}>
          {[
            'Monologue duration respected (5–7 min, approx. 130 words/min)',
            'At least 5–6 different connectors used',
            'Formal register maintained throughout (no excessive informality)',
            'Recovered well from an unexpected question (reformulation)',
            'Stress managed (breathing, eye contact, posture)',
            'Document source cited in the introduction',
            'Explicit transitions between each main section',
            'Conclusion directly answers the opening problem',
          ].map((item, i) => (
            <Row key={i} gap={8} align="start">
              <div style={{
                width: 16, height: 16, border: `1.5px solid ${theme.stroke.primary}`,
                borderRadius: 3, flexShrink: 0, marginTop: 2,
              }} />
              <Text size="small">{item}</Text>
            </Row>
          ))}
        </Grid>
      </Stack>

      <Divider />

      {/* ── CHAPTER 5 — STUDY PLAN ── */}
      <Stack gap={20} style={{ paddingTop: 36, paddingBottom: 36 }}>
        <ChapterHeader num="5" title="Study Plan — 8 to 12 Weeks" subtitle="Progressive preparation schedule" />

        <Text tone="secondary" size="small">Approximately 5–7 hours/week combining listening, note-taking, spoken practice and active review.</Text>

        <Table
          striped
          headers={['Phase', 'Weeks', 'Main goal', 'Key activities']}
          rows={[
            ['Discovery', '1–2', 'Understand the format', 'Read official CIEP documents and scoring grids · Watch 3 B2 model speeches on YouTube · Practice 2-minute introductions'],
            ['Structure', '3–4', 'Master argumentation', 'Train on intro + problem statement · Vocabulary & connectors · Full 5-minute speech simulation'],
            ['Fluency', '5–6', 'Sound natural', 'Record yourself + listen back · Oral interaction with a partner · Identify and analyze recurring errors'],
            ['Intensive', '7–8', 'Real exam conditions', 'Full mock exams (monologue + debate) · Targeted revision of weak points'],
            ['Consolidation', '9–10 ✦', 'Refine and reduce stress', 'Sessions with native speaker tutor · Breathing and stress management exercises · Debriefs'],
            ['Final phase', '11–12 ✦', 'Automate', 'Spontaneous multi-topic monologues · Simulations in front of a small audience'],
          ]}
          columnAlign={['left', 'center', 'left', 'left']}
        />
        <Text size="small" tone="tertiary">✦ Optional — depending on available time.</Text>

        <SectionLabel>Daily training routine (30–60 min)</SectionLabel>
        <Grid columns={3} gap={14}>
          <Stack gap={6} style={{ borderLeft: `3px solid ${theme.stroke.primary}`, paddingLeft: 12 }}>
            <Text size="small" weight="semibold">Active listening · 10 min</Text>
            <Text size="small" tone="secondary">Read a news article or listen to a podcast on a social topic. Note down 2–3 ideas and opinions to reuse.</Text>
          </Stack>
          <Stack gap={6} style={{ borderLeft: `3px solid ${theme.stroke.primary}`, paddingLeft: 12 }}>
            <Text size="small" weight="semibold">Oral production · 20–30 min</Text>
            <Text size="small" tone="secondary">Pick a topic, prepare a plan in 5 min, record yourself for 2–3 min, listen back and note errors.</Text>
          </Stack>
          <Stack gap={6} style={{ borderLeft: `3px solid ${theme.stroke.primary}`, paddingLeft: 12 }}>
            <Text size="small" weight="semibold">Review · 10 min</Text>
            <Text size="small" tone="secondary">Memorize 3–5 new connectors or expressions. Complete the self-evaluation grid from Chapter 4.</Text>
          </Stack>
        </Grid>

        <SectionLabel>Practice topics by theme</SectionLabel>
        <Grid columns={2} gap={12}>
          {[
            { theme: 'Work & Society', topics: ['Remote work: advantages and limits', 'Gender pay gap', 'Part-time work: choice or constraint?'] },
            { theme: 'Technology & AI', topics: ['Artificial intelligence: opportunity or threat?', 'Smartphone dependency', 'Social networks and freedom of expression'] },
            { theme: 'Environment', topics: ['Ecological transition: whose responsibility?', 'Public transport vs personal car', 'Vegetarianism: personal choice or necessity?'] },
            { theme: 'Education & Culture', topics: ['Inclusive schooling for students with disabilities', 'Should regional languages be taught in school?', 'Is art accessible to everyone?'] },
          ].map(({ theme: t, topics }) => (
            <Card key={t}>
              <CardHeader>{t}</CardHeader>
              <CardBody>
                <Stack gap={4}>
                  {topics.map((s) => <Text key={s} size="small">• {s}</Text>)}
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Stack>

      <Divider />

      {/* ── CHAPTER 6 — RESOURCES ── */}
      <Stack gap={20} style={{ paddingTop: 36, paddingBottom: 36 }}>
        <ChapterHeader num="6" title="Annotated Resources" subtitle="Websites, books, videos and oral practice tools" />

        <SectionLabel>6.1 — Official resources (free)</SectionLabel>
        <Table
          headers={['Resource', 'Type', 'What you\'ll find']}
          rows={[
            ['France Éducation International (CIEP)', 'Official website', 'Official grids, candidate handbooks, sample topics, detailed scoring rubrics'],
            ['DELF B2 Candidate Handbook', 'Official PDF', 'Full exam format, scoring, allowed materials, exact instructions'],
            ['B2 Evaluation Grids', 'Official PDF', 'Scoring breakdown by criterion: task, vocabulary, grammar, pronunciation'],
          ]}
        />

        <SectionLabel>6.2 — FLE blogs & websites (free)</SectionLabel>
        <Table
          headers={['Resource', 'Key strengths']}
          rows={[
            ['LiL\'Langues (lillangues.com)', 'Strategic advice, phrase lists, stress management — very thorough 2026 article'],
            ['Commun français (communfrancais.com)', 'Step-by-step models, analyzed example on remote work, comment forum'],
            ['Mon Projet Français (monprojetfrancais.com)', 'Phrase lists for speech & debate + downloadable PDF summary sheet'],
            ['Français avec Pierre (YouTube)', 'DELF B2 video capsules, corrected examples with didactic commentary'],
          ]}
        />

        <SectionLabel>6.3 — Recommended books</SectionLabel>
        <Table
          headers={['Title', 'Publisher', 'Cost', 'Best for']}
          rows={[
            ['Objectif DELF B2', 'CLE International', '~€25', 'Self-study & class — complete guide + audio CD'],
            ['Réussir le DELF B2', 'Hachette FLE', '~€20', 'Skill-by-skill exercises, corrected topics, methodology tips'],
            ['ABC DELF B2', 'Didier', '~€15', 'Full mock exams + answer keys (oral + written)'],
          ]}
          columnAlign={['left', 'left', 'center', 'left']}
        />

        <SectionLabel>6.4 — MOOCs, podcasts & oral practice</SectionLabel>
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader trailing={<Pill size="sm" tone="success">Free</Pill>}>
              FUN MOOC — Prepare for DELF B2
            </CardHeader>
            <CardBody>
              <Text size="small">Full online course (France Université Numérique). B2 oral production topics with expert-corrected answers. Modular sequences designed for self-study.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader trailing={<Pill size="sm" tone="success">Free</Pill>}>
              French-language podcasts
            </CardHeader>
            <CardBody>
              <Stack gap={3}>
                <Text size="small">• Journal en français facile — RFI</Text>
                <Text size="small">• InnerFrench (Hugo Décrypte) — B2/C1 level</Text>
                <Text size="small">• L'Info du jour — France Inter</Text>
                <Text size="small">• NoLimitFLE — exam experiences</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader trailing={<Pill size="sm" tone="neutral">Paid</Pill>}>
              Italki / Preply
            </CardHeader>
            <CardBody>
              <Text size="small">One-on-one lessons with certified FLE teachers. Simulate the exam in real conditions and receive direct, personalized feedback.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader trailing={<Pill size="sm" tone="success">Free</Pill>}>
              Tandem / HelloTalk
            </CardHeader>
            <CardBody>
              <Text size="small">Language exchange apps. Find a native French-speaking partner to practice conversation and get your ear used to natural speech rhythm.</Text>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Divider />

      {/* ── FOOTER ── */}
      <Stack gap={4} style={{ paddingTop: 24, paddingBottom: 8 }}>
        <Text size="small" tone="tertiary">
          DELF B2 Oral Production — Complete Preparation Guide · Based on official France Éducation International (CIEP) documents · May 2026
        </Text>
        <Text size="small" tone="tertiary">
          Chapters: 1. The Exam · 2. Methods · 3. Corrected Examples · 4. Self-Evaluation · 5. Study Plan · 6. Resources
        </Text>
      </Stack>

    </Stack>
  );
}
