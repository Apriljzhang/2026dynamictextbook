/**
 * Industrial Economics IV — content aligned with:
 * Games and Strategies in Industrial Economics (Yu & Xu, Tuatara Publishing, 2025).
 * PDF: Lecture_Notes_for_IE_4__A5__pages_reset_.pdf
 */

export const IO4_SOURCE = {
  courseTitle: "Industrial Economics IV: Games and Strategies",
  fileName: "Lecture_Notes_for_IE_4__A5__pages_reset_.pdf",
  bookTitleEn: "Games and Strategies in Industrial Economics",
  authors: "Zhixian Yu, Youzong Xu",
  publisher: "Tuatara Publishing",
  year: 2025,
  moduleCode: "BUSI3197",
  moduleTitleEn: "Industrial Economics IV: Games and Strategies",
  driveUrl: "https://drive.google.com/file/d/1fDlwPtwXh63jctmbfL_4XD13uiESqXFI/view",
} as const;

export interface Io4Section {
  id: string;
  n: string;
  title: string;
  titleEn: string;
  teacher: { paragraphs: string[] };
  student: { paragraphs: string[] };
  studentCase?: { title: string; body: string };
}

export const io4LectureSections: Io4Section[] = [
  {
    id: "io4-ch1",
    n: "1",
    title: "Non-cooperative game theory",
    titleEn: "Chapter 1",
    teacher: {
      paragraphs: [
        "Game theory studies strategically interdependent behaviour: what I do affects you, and what you do affects me. Throwing a ball against a wall is not a game-theoretic situation because the path is predictable; throwing a ball at another person is, because the outcome depends on how both sides respond, including higher-order beliefs about what each believes the other believes.",
        "Game theory is central to modern microeconomics. Learning it means strengthening interactive thinking—putting yourself in others’ shoes and reasoning about what they think you will do. Basic ingredients are players, available actions, and payoffs. Games differ along many dimensions: non-cooperative versus cooperative emphasis, static versus dynamic timing, zero-sum versus positive-sum payoffs, and more.",
        "Two benchmark assumptions are rationality (players aim to maximise their own payoffs and can compute best responses) and common knowledge (information is not only known, but known to be known, and so on). These are stylised, but they provide a sharp benchmark from which richer behavioural or evolutionary models can be developed.",
      ],
    },
    student: {
      paragraphs: [
        "Think of it as “your move changes my payoff, and mine changes yours.” Against a wall, physics decides; against a person, psychology and strategy decide.",
        "Rationality and common knowledge are simplifying assumptions—like frictionless planes in physics. They make the logic clean before you add real-world messiness.",
      ],
    },
  },
  {
    id: "io4-ch2",
    n: "2",
    title: "Cooperative game theory",
    titleEn: "Chapter 2",
    teacher: {
      paragraphs: [
        "Cooperative game theory focuses on settings where agreements and communication matter: how to divide surplus from joint production or allocate costs of a joint project. Non-cooperative game theory, by contrast, emphasises individual strategic choices without necessarily modelling the bargaining protocol.",
        "Reasonable cost or surplus sharing rules are often required to satisfy efficiency and fairness properties. Illustrations include weak Pareto efficiency, monotonicity, symmetry, and scale invariance.",
        "The Nash bargaining solution, the Shapley value, and the nucleolus are classical solution concepts that select a unique allocation among many possibilities, each embodying different axiomatic foundations.",
      ],
    },
    student: {
      paragraphs: [
        "Here the question is “who gets what” when people can talk and contract—splitting surplus or sharing a bill.",
        "The elevator problem in the book is a running example: different floors benefit differently, so who pays how much?",
      ],
    },
    studentCase: {
      title: "Elevator problem (old buildings)",
      body: "When an elevator benefits everyone unevenly, a fair rule should respect who gains more, who can pay, and efficiency. Weak Pareto, monotonicity, and symmetry are the textbook properties that discipline “reasonable” shares—useful for class discussion.",
    },
  },
  {
    id: "io4-ch3",
    n: "3",
    title: "Bargaining",
    titleEn: "Chapter 3",
    teacher: {
      paragraphs: [
        "Bargaining blends cooperation and competition: agreement creates gains from trade, but each side wants a larger share. Cooperative approaches deliver axiomatic splits; non-cooperative models spell out who offers when and solve for subgame-perfect outcomes.",
        "Rubinstein’s infinite-horizon alternating-offer model is a workhorse: players discount the future, take turns proposing and responding, and under standard conditions a unique subgame-perfect equilibrium exists.",
      ],
    },
    student: {
      paragraphs: [
        "No deal often hurts both sides; the fight is over the split. Alternating offers + patience usually determine who gets more in equilibrium.",
      ],
    },
  },
  {
    id: "io4-ch4",
    n: "4",
    title: "Monopoly",
    titleEn: "Chapter 4",
    teacher: {
      paragraphs: [
        "A monopolist is not a dictator who can ignore demand: market demand still constrains feasible price–quantity pairs. Profit maximisation equates marginal revenue to marginal cost.",
        "Extensions include multi-product pricing, intertemporal pricing, and dominant-firm models with a competitive fringe.",
      ],
    },
    student: {
      paragraphs: [
        "Even a monopolist faces a demand curve: charge more, sell less. The sweet spot is still MR = MC.",
      ],
    },
  },
  {
    id: "io4-ch5",
    n: "5",
    title: "Oligopoly",
    titleEn: "Chapter 5",
    teacher: {
      paragraphs: [
        "Cournot and Bertrand are stylised portraits of oligopoly: quantity versus price competition. They are deliberately simplified so comparative statics stay transparent before adding differentiation or dynamics.",
        "Stackelberg leadership introduces sequential moves: the leader anticipates followers’ best responses.",
      ],
    },
    student: {
      paragraphs: [
        "Cournot: pick quantities, let price clear the market. Bertrand: fight on price. Stackelberg: someone moves first—order matters.",
      ],
    },
  },
  {
    id: "io4-ch6",
    n: "6",
    title: "Product differentiation",
    titleEn: "Chapter 6",
    teacher: {
      paragraphs: [
        "With differentiated products, consumers care about both which variant they prefer and how much they pay. Bertrand competition with differentiated demand yields upward-sloping best responses in prices.",
        "Spatial models (Hotelling, Salop) represent differentiation on a line or circle; clustering can emerge when firms chase the centre of demand.",
      ],
    },
    student: {
      paragraphs: [
        "If products differ, firms need not race to marginal cost on price alone. Spatial models literally put “distance” between products—think travel cost or taste gaps.",
      ],
    },
  },
  {
    id: "io4-ch7",
    n: "7",
    title: "Price discrimination",
    titleEn: "Chapter 7",
    teacher: {
      paragraphs: [
        "Price discrimination requires market power, information about willingness to pay (or menus that induce self-selection), and limits on resale.",
        "First-degree discrimination captures all surplus; uniform monopoly pricing creates deadweight loss; second-degree tools include two-part tariffs and quantity discounts.",
      ],
    },
    student: {
      paragraphs: [
        "You need power to price discriminate, a way to separate types, and a way to stop cheap units being resold to high-value buyers.",
      ],
    },
  },
  {
    id: "io4-ch8",
    n: "8",
    title: "Information",
    titleEn: "Chapter 8",
    teacher: {
      paragraphs: [
        "Asymmetric information pervades product markets. Akerlof’s lemons model shows how adverse selection can unravel quality.",
        "Later models study imperfectly observed prices, signalling, and Bayesian persuasion.",
      ],
    },
    student: {
      paragraphs: [
        "If buyers cannot tell lemons from peaches, average willingness to pay falls—and good sellers may exit first.",
      ],
    },
    studentCase: {
      title: "Dorms & public goods",
      body: "Shared spaces (cleaning, elevators) pair private costs with shared benefits—rules (rotations, cost shares) change payoffs and can support more cooperative outcomes.",
    },
  },
];
