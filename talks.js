/* Talks catalogue. Dates and venues without a separate link are transcribed from the CV.
   Titles and overviews are corroborated by organiser programmes or the author's earlier Google Site. */
(() => {
  'use strict';

  const courses = [
    {
      date: '2024-07-16', when: 'Jul 2024', count: '3 lectures',
      title: 'Algebraic Topology',
      event: 'Mathematics and Physics Summer School (MAPSS)',
      location: 'SwissMAP Research Station, Les Diablerets, Switzerland',
      links: [['Programme', 'https://indico.global/event/9652/timetable/?print=1&view=standard']]
    },
    {
      date: '2024-07-19', when: 'Jul 2024', count: '3 lectures',
      title: 'Singular ODEs',
      event: 'Mathematics and Physics Summer School (MAPSS)',
      location: 'SwissMAP Research Station, Les Diablerets, Switzerland',
      links: [['Programme', 'https://indico.global/event/9652/timetable/?print=1&view=standard']]
    },
    {
      date: '2024-07-01', when: 'Jul 2024',
      title: 'Mini-course at Poisson 2024',
      event: 'Poisson 2024: Summer School & Conference',
      location: 'Accademia Pontaniana, Naples, Italy',
      links: [['School', 'https://sites.google.com/view/poisson2024/poisson-2024/school/participants-photos']]
    },
    {
      date: '2023-04-04', when: 'Apr 2023', count: '3 lectures',
      title: 'Invitation to Resurgence With a View Towards Geometry',
      event: 'Invitation to Recursion, Resurgence, and Combinatorics',
      location: 'Okinawa Institute of Science and Technology, Japan',
      overview: 'Divergent asymptotic series arise in dynamical systems, gauge theory, deformation quantisation, mirror symmetry, and quantum field theory. This introductory course develops asymptotic expansions, Borel–Laplace methods, factorial growth, and Borel resummation, then moves towards Stokes phenomena, endless analytic continuation, and resurgent transseries. It emphasises that resurgence is rooted in complex analysis while possessing a rich algebro-geometric dimension: perturbative expansions can already encode nonperturbative information.',
      links: [['Original abstract', 'https://sites.google.com/view/nikita-nikolaev/talks'], ['Lecture materials', 'https://groups.oist.jp/ja/math-phys-2023/material']]
    }
  ];

  const talks = [
    {
      date: '2024-04', when: 'Apr 2024',
      event: 'Quantum Curves Day',
      location: 'University of Edinburgh, United Kingdom'
    },
    {
      date: '2025-10', when: 'Oct 2025',
      title: 'Geometry and Resurgence of WKB Solutions of Schrödinger Equations',
      event: 'Mini-Workshop: Resurgence, Difference Equations, and Quantum Modularity',
      location: 'Mathematisches Forschungsinstitut Oberwolfach, Germany',
      overview: 'The talk describes a geometric solution to the resurgence problem for formal WKB solutions on Riemann surfaces. Spectral curves and holomorphic Lie groupoids give a global description of analytic continuation in the Borel plane, including its singularities and Stokes directions.',
      links: [['Workshop report', 'https://ems.press/content/serial-article-files/52434']]
    },
    {
      date: '2025-10-21', when: 'Oct 2025',
      title: 'Geometry and Resurgence of WKB Solutions of Schrödinger Equations',
      event: 'Integrable Systems and Mathematical Physics Seminar',
      location: 'University of Glasgow, United Kingdom',
      links: [['Seminar archive', 'https://www.gla.ac.uk/schools/mathematicsstatistics/events/archive/?seriesID=9']]
    },
    {
      date: '2025-03-18', when: 'Mar 2025',
      title: 'Resurgence of the Deformed Painlevé I Equation',
      event: 'Painlevé Equations, Higher Teichmüller Theory, and Quantization',
      location: 'Barcelona, Spain',
      overview: 'The formal perturbative solution of the deformed first Painlevé equation diverges, yet has a resurgent Borel transform. Its endless analytic continuation is organised by a striking algebraic surface related to the Fermat quintic, with five distinguished singularities in each generic fibre. This is joint work with M. Alameddine, O. Marchal, and N. Orantin.',
      links: [['Conference abstract', 'https://sites.google.com/upc.edu/painleveequationsteichmuller/titles-and-abstracts']]
    },
    { date: '2024-12', when: 'Dec 2024', event: 'Manchester Geometry Seminar', location: 'University of Manchester, United Kingdom' },
    {
      date: '2024-11-05', when: 'Nov 2024',
      title: 'Geometry and Resurgence of WKB Solutions of Schrödinger Equations',
      event: 'SYMCREA Seminar', location: 'Universitat Politècnica de Catalunya, Barcelona, Spain',
      overview: 'The WKB method for Schrödinger equations admits an invariant geometric formulation. On compact Riemann surfaces, the Borel transform of a formal WKB solution gives rise to an infinite Riemann surface, whose structure is controlled by the spectral curve of the Schrödinger operator and governs the Stokes phenomenon.',
      links: [['Seminar abstract', 'https://sites.google.com/upc.edu/symcrea/events/past-seminars']]
    },
    { date: '2024-03', when: 'Mar 2024', event: 'MAGIC Seminar', location: 'Imperial College London, United Kingdom' },
    {
      date: '2024-03-04', when: 'Mar 2024',
      title: 'Geometry of the Exact WKB Method', event: 'Manchester Geometry Seminar',
      location: 'University of Manchester, United Kingdom',
      overview: 'Exact perturbation theory uses tools such as Borel resummation to extract analytic, nonperturbative information from divergent expansions. This talk explains a geometric treatment of the exact WKB method for equations such as the Schrödinger equation, and discusses applications to moduli of connections and Higgs bundles, cluster varieties, and BPS invariants.',
      links: [['Original abstract', 'https://events.manchester.ac.uk/event/event:j2un-lslqee61-l520h6']]
    },
    { date: '2024-02', when: 'Feb 2024', event: 'London Geometry and Topology Seminar', location: 'Imperial College London, United Kingdom' },
    { date: '2023-10', when: 'Oct 2023', event: 'Algebraic Analysis Seminar', location: 'Tokyo, Japan' },
    {
      date: '2023-09-06', when: 'Sep 2023',
      title: 'Geometry and Borel Summability of Exact WKB Solutions for Equations of Higher Order',
      event: 'Frontiers in Nonlinear Differential Equations and Stokes Phenomena',
      location: 'Okinawa Institute of Science and Technology, Japan (online)',
      overview: 'The exact WKB ansatz produces divergent formal solutions of singularly perturbed differential equations such as the Schrödinger and Berk–Nevins–Roberts equations. The talk describes a geometric approach to Borel summability, especially in higher order, explaining how the geometry controlling Stokes phenomena permits an invariant algebro-geometric formulation in terms of splittings of extensions of holomorphic vector bundles.',
      links: [['Original abstract', 'https://sites.google.com/view/nikita-nikolaev/talks'], ['Symposium', 'https://groups.oist.jp/tsvp/event/nonlinear-differential-equations-and-stokes-phenomenon']]
    },
    {
      date: '2023-05-02', when: 'May 2023',
      title: 'Geometry and Borel Summability of Exact WKB Solutions',
      event: 'ReNewQuantum Seminar',
      location: 'Center for Quantum Mathematics, University of Southern Denmark',
      overview: 'Formal WKB solutions to singularly perturbed linear ODEs typically diverge. Their Borel resummation raises a subtle analytic problem, particularly for equations of higher order. The talk explains a geometric solution, including a formulation of exact WKB theory for meromorphic connections using invariant splittings of bundle extensions.',
      links: [['Original abstract', 'https://sites.google.com/view/nikita-nikolaev/talks']]
    },
    {
      date: '2023-04-17', when: 'Apr 2023',
      title: 'Spectral Clusters from the Abelianisation of Groupoid Representations',
      event: 'Mini-Workshop on Topological Recursion',
      location: 'University of Tokyo, Japan',
      overview: 'Flat meromorphic connections on holomorphic bundles can be investigated through representations of associated Lie groupoids. Their moduli spaces carry geometric features including symplectic and cluster-algebra structures. The talk discusses an abelianisation approach to these representation spaces, analogous to a spectral theory for connections.',
      links: [['Programme & slides', 'https://sites.google.com/view/kentoosuga/events/mini-workshop-on-tr'], ['Original abstract', 'https://sites.google.com/view/nikita-nikolaev/talks']]
    },
    {
      date: '2023-04-11', when: 'Apr 2023',
      title: 'Geometry and Borel Summability of Exact WKB Solutions',
      event: 'Invitation to Recursion, Resurgence, and Combinatorics',
      location: 'Okinawa Institute of Science and Technology, Japan',
      overview: 'The exact WKB method produces formal exponential solutions to singularly perturbed linear differential equations. Their divergence presents an analytic challenge, which can be addressed through Borel resummation. The talk also explains how these constructions admit an invariant geometric formulation for meromorphic connections.',
      links: [['Conference abstract', 'https://groups.oist.jp/system/files/Program_4.pdf'], ['Slides', 'https://groups.oist.jp/system/files/2023.04%20Okinawa%20Talk.pdf']]
    },
    {
      date: '2023-03-22', when: 'Mar 2023',
      title: 'Outreach Plenary Talk: Geometric Spaces from Differential Equations',
      event: 'Manchester Interdisciplinary Mathematics Undergraduate Conference',
      location: 'University of Manchester, United Kingdom',
      links: [['Original listing', 'https://sites.google.com/view/nikita-nikolaev/talks']]
    },
    {
      date: '2023-03-07', when: 'Mar 2023',
      title: 'Spectral Clusters from the Abelianisation of Groupoid Representations',
      event: 'Algebra Seminar', location: 'University of Leeds, United Kingdom',
      overview: 'The representation theory of Lie groupoids provides a way to study flat meromorphic connections and the symplectic and cluster structures on their moduli spaces. Abelianisation recasts this nonabelian geometry as a kind of spectral theory for connections.',
      links: [['Original abstract', 'https://sites.google.com/view/nikita-nikolaev/talks']]
    },
    {
      date: '2023-03-02', when: 'Mar 2023',
      title: 'Borel Resummation in Exact Perturbation Theory and the Exact WKB Method',
      event: 'Physical Mathematics Seminar', location: 'University of Geneva, Switzerland',
      overview: 'Exact perturbation theory seeks analytic information beyond divergent perturbative expansions. Borel resummation can recover exponentially small, nonperturbative corrections already encoded in those expansions. The talk introduces this perspective through the exact WKB method for singularly perturbed linear ODEs, and describes recent progress in establishing Borel summability of formal solutions.',
      links: [['Original abstract', 'https://sites.google.com/view/nikita-nikolaev/talks'], ['Seminar archive', 'https://sites.google.com/view/geneva-math-ph-seminars/archive']]
    },
    {
      date: '2023-02-24', when: 'Feb 2023',
      title: 'Borel Resummation in Exact Perturbation Theory and the Exact WKB Method',
      event: 'Séminaire de Physique Mathématique', location: 'Institut Camille Jordan, Lyon, France',
      overview: 'The Borel transform and resummation make it possible to extract nonperturbative, exponentially small terms from divergent expansions. The talk explains how this works in exact WKB analysis of singularly perturbed ODEs and surveys recent results showing how formal WKB series can yield genuine analytic solutions.',
      links: [['Original abstract', 'https://sites.google.com/view/nikita-nikolaev/talks']]
    },
    {
      date: '2023-02-17', when: 'Feb 2023',
      title: 'Spectral Clusters from the Abelianisation of Groupoid Representations',
      event: 'Algebra Seminar', location: 'University of Edinburgh, United Kingdom',
      overview: 'Meromorphic flat connections can be studied via representations of Lie groupoids. Their moduli spaces have striking symplectic and cluster-algebra structures. The talk introduces abelianisation as a spectral-theoretic means of analysing these spaces and the associated geometry.',
      links: [['Original abstract', 'https://sites.google.com/view/nikita-nikolaev/talks']]
    },
    {
      date: '2023-01-30', when: 'Jan 2023',
      title: 'Exact WKB Solutions: Their Borel Summability and Relationship to Abelianisation of ħ-Connections',
      event: 'Workshop on Quantization and Resurgence', location: 'SwissMAP Research Station, Switzerland',
      overview: 'WKB exponential series for singularly perturbed ODEs usually diverge. The talk discusses the analytic challenge of Borel resummation, with particular attention to higher-order equations, and shows how the construction can be made geometrically invariant through an algebro-geometric description of meromorphic connections and bundle extensions.',
      links: [['Original abstract', 'https://sites.google.com/view/nikita-nikolaev/talks'], ['Workshop programme', 'https://indico.global/event/9562/timetable/?view=standard_numbered']]
    },
    { date: '2022-11-14', when: '14 Nov 2022', title: 'Abelianisation of $\\lambda$-Connections', event: 'Geometric Structures Laboratory', location: 'Fields Institute, Toronto, Canada', links: [['Seminar programme', 'https://www.fields.utoronto.ca/activities/22-23/geostructures']] },
    { date: '2022-10-03', when: '3 Oct 2022', title: 'Abelianisation of Meromorphic λ-Connections', event: 'Geometry and Mathematical Physics Seminar', location: 'University of Birmingham, United Kingdom' },
    { date: '2022-06', when: 'Jun 2022', event: 'Enhancing RNG Retreat', location: 'Barony Castle Hotel, United Kingdom' },
    { date: '2022-05', when: 'May 2022', title: 'Complex Hyperkähler Geometry of $\\mathrm{SL}(2)$-$\\lambda$-Connections', event: 'Global Poisson Webinar', location: 'Online' },
    { date: '2022-03-23', when: '23 Mar 2022', title: 'Moduli Spaces of Connections and Abelianisation', event: 'Pure Mathematics Colloquium', location: 'University of Sheffield, United Kingdom' },
    { date: '2021-10-20', when: '20 Oct 2021', title: 'Abelianisation of Filtered Local Systems on Surfaces', event: 'Geometry and Topology Seminar', location: 'Louisiana State University, United States' },
    { date: '2021-10-08', when: '8 Oct 2021', title: 'WKB Filtrations', event: 'Geometric Structures Laboratory', location: 'Fields Institute, Toronto, Canada' },
    {
      date: '2021-09-16', when: 'Sep 2021',
      title: 'Abelianisation of Meromorphic Connections',
      event: 'Online Algebraic Geometry Seminar', location: 'Online',
      overview: 'The classical spectral correspondence relates Higgs bundles on a compact complex curve to line bundles on a branched covering curve. This talk extends the abelianisation approach to flat bundles, using a graph and an associated cocycle to deform the direct-image construction. The correspondence also applies to λ-connections and recovers the Higgs-bundle picture as λ tends to zero. Based in part on work in progress with Marco Gualtieri.',
      links: [['Watch recording', 'https://www.youtube.com/watch?v=EZkTcd2Dlk4']]
    },
    { date: '2021-09', when: 'Sep 2021', event: 'Nottingham Algebraic Geometry Seminar', location: 'Online, United Kingdom' },
    {
      date: '2021-07', when: 'Jun–Jul 2021',
      title: 'Abelianisation and the Exact WKB Method for Meromorphic ħ-Connections',
      event: 'BPS States, Mirror Symmetry and Exact WKB', location: 'Sheffield, United Kingdom',
      links: [['Watch recording', 'https://www.youtube.com/watch?v=wRqPmv2QGJA']]
    },
    {
      date: '2021-04-07', when: '7 Apr 2021',
      title: 'WKB Filtrations and the Singularly Perturbed Riccati Equation',
      event: 'Web-Seminar on Painlevé Equations and Related Topics', location: 'Online',
      links: [['Watch recording', 'https://www.youtube.com/watch?v=n7Z5joU_vyM']]
    },
    {
      date: '2021-03-19', when: 'Mar 2021',
      title: 'Abelianisation of Meromorphic GL(2,C)-Connections on Riemann Surfaces',
      event: 'Friday Fish Seminar', location: 'Utrecht Geometry Centre, Netherlands',
      overview: 'Meromorphic connections may be viewed as representations of holomorphic Lie algebroids or of their integrating Lie groupoids. Abelianisation replaces suitable nonabelian representations on a Riemann surface with rank-one representations on an associated branched cover. For rank two, the talk explains this as an equivalence of categories.',
      links: [['Abstract & slides', 'https://utrechtgeometrycentre.nl/friday-fish-seminar-archive/'], ['Watch recording', 'https://www.youtube.com/watch?v=D1C0BoMK674']]
    },
    {
      date: '2020-04', when: '2020',
      title: 'Singularly Perturbed Riccati Equation and the Exact WKB Method',
      event: 'Stokes Webinar', location: 'University of Geneva (online), Switzerland',
      links: [['Watch recording', 'https://www.youtube.com/watch?v=c5PSPdxeSHM']]
    },
    { date: '2020-01', when: 'Jan 2020', event: 'Mathematical Physics Seminar', location: 'Institut Camille Jordan, Lyon, France' },
    {
      date: '2020-10-14', when: '14 Oct 2020',
      title: 'Abelianisation of Meromorphic Connections and the Geometric Exact WKB Method',
      event: 'ICMAT Geometry Seminar', location: 'Instituto de Ciencias Matemáticas, Madrid, Spain (online)',
      links: [['Seminar listing', 'https://researchseminars.org/seminar/ICMAT_Geometry_Seminar']]
    },
    {
      date: '2020-09', when: 'Sep 2020',
      title: 'Existence of Exact WKB Solutions of Schrödinger Equations',
      event: '7th SwissMAP General Meeting', location: 'Saanenmöser, Switzerland',
      links: [['Meeting programme', 'https://www.nccr-swissmap.ch/news-and-events/events/7th-swissmap-general-meeting?occurrenceID=797']]
    },
    { date: '2019-08', when: 'Aug 2019', event: 'New Trends in Geometry and Mathematical Physics', location: 'CSF Monte Verità, Switzerland' },
    { date: '2019-08', when: 'Aug 2019', event: 'Representation Theory and Integrable Structures', location: 'ETH Zürich, Switzerland' },
    {
      date: '2019-02', when: 'Feb 2019',
      title: 'Logarithmic connections on Riemann Surfaces',
      event: 'QGM Seminar', location: 'Centre for Quantum Geometry of Moduli Spaces, Aarhus University, Denmark',
      abstractKey: '2019-02-qgm-intro'
    },
    {
      date: '2019-02', when: 'Feb 2019',
      title: 'Abelianisation of Logarithmic sl(2)-Connections',
      event: 'QGM Seminar', location: 'Centre for Quantum Geometry of Moduli Spaces, Aarhus University, Denmark',
      abstractKey: '2019-02-qgm-abelianisation'
    },
    { date: '2018-12', when: 'Dec 2018', event: 'Mathematical Physics and Algebraic Topology Seminar', location: 'Angers, France' },
    { date: '2018-12', when: 'Dec 2018', title: 'Abelianisation of Logarithmic sl(2)-Connections', event: 'Geometry and Quantisation Seminar', location: 'Institut Henri Poincaré, Paris, France', abstractKey: '2018-12-ihp' },
    { date: '2018-10', when: 'Oct 2018', event: 'Algebraic Geometry and Number Theory Seminar', location: 'Institute of Science and Technology Austria' },
    {
      date: '2018-09-20', when: 'Sep 2018',
      title: 'Abelianisation of Logarithmic sl₂-Connections',
      event: 'Analysis and Geometry Seminar', location: 'Central Michigan University, United States',
      overview: 'Abelianisation relates rank-two logarithmic connections on a Riemann surface to rank-one connections on an associated spectral double cover. Unlike the spectral correspondence for Higgs bundles, the construction uses a Voros cocycle to encode the additional gluing data associated with triangulations, spectral networks, and WKB connection matrices. The talk presents an equivalence of categories under suitable genericity and transversality conditions.',
      links: [['Seminar abstract', 'https://people.se.cmich.edu/chakr2d/docs/seminar/geometryseminar.html']]
    },
    { date: '2018-09', when: 'Sep 2018', event: 'Algebraic Geometry Seminar', location: 'University of Saskatchewan, Canada' },
    { date: '2018-05', when: 'May 2018', title: 'Abelianisation of Logarithmic Connections', event: 'Geometry and Physics XVI', location: 'West University of Timișoara, Romania' },
    { date: '2018-03', when: 'Mar 2018', event: 'Talks in Mathematical Physics', location: 'ETH Zürich, Switzerland' },
    { date: '2018-02', when: 'Feb 2018', title: 'Geometry Behind the WKB Method', event: 'Lie Groups and Moduli Spaces Seminar', location: 'University of Geneva, Switzerland' },
    { date: '2018-01', when: 'Jan 2018', event: 'Algebraic Structures in Topology and Geometry', location: 'SwissMAP, Switzerland' }
  ];

  const verifiedOverviews = [
    {
      list: 'lecture-course-list', title: 'Geometric Resurgence', starts: '2026',
      overview: 'A three-part introduction to resurgence, with an emphasis on the geometry behind analytic continuation and Stokes phenomena. The accompanying materials develop the theory through geometric examples and exact WKB methods.'
    },
    {
      list: 'lecture-course-list', title: 'Geometry and Borel Summability of Exact WKB Solutions',
      overview: 'The formal WKB method gives exponential power-series solutions to singularly perturbed equations. The lectures explain the geometric setting of the construction and the analytic question of when divergent WKB series can be Borel resummed to actual solutions.'
    },
    {
      list: 'research-talk-list', title: 'Resurgence of WKB Solutions for Schrödinger Equations',
      overview: 'An explanation, through examples, of a geometric proof of the Voros–Écalle quantum resurgence conjecture. The proof uses spectral curves, holomorphic Lie groupoids, and global flows of meromorphic vector fields.'
    },
    {
      list: 'research-talk-list', title: 'Geometry and Resurgence of WKB Solutions of Schrödinger Equations', starts: '2025-02',
      overview: 'The WKB method for Schrödinger equations on compact Riemann surfaces has an invariant geometric formulation. The Borel transforms of formal WKB solutions extend to an infinite Riemann surface with controlled exponential growth, and the geometry of that surface governs the Stokes phenomenon.'
    },
    {
      list: 'research-talk-list', title: 'Borel Summability of WKB Solutions for Higher-Order Equations', starts: '2023-10',
      overview: 'A detailed account of the proof of Borel summability for WKB solutions of singularly perturbed higher-order linear ODEs. The argument reduces the equations to a matrix Riccati system, applies the Borel transform to obtain a nonlinear PDE, and solves it by successive approximations. Controlling analytic continuation in the Borel plane requires careful analysis of the Stokes phenomenon.'
    },
    {
      list: 'research-talk-list', title: 'Existence and Uniqueness of Exact Solutions for the Singularly Perturbed Riccati Equation', starts: '2021-03',
      overview: 'The singularly perturbed Riccati equation is central to exact WKB analysis. Its formal power-series solutions normally diverge; Borel–Laplace resummation instead produces exact analytic solutions. The talk presents an existence-and-uniqueness theorem giving a canonical correspondence between formal asymptotic data and actual solutions, alongside an introduction to Gevrey asymptotics.'
    }
  ];

  // Verbatim abstracts from the author's original site and official event listings.
  // Each entry is keyed by its presentation date to distinguish repeat talks.
  const sourceAbstracts = {
    "2018-09-20": "I will describe an approach to studying meromorphic connections on vector bundles called abelianisation. This technique has its origins in the works of Fock-Goncharov (2006) and Gaiotto-Moore-Neitzke (2013), as well as the WKB analysis. Its essence is to put rank-$n$ connections on a complex curve $X$ in correspondence with much simpler objects: connections on line bundles over an $n$-fold cover $\\Sigma\\to X$.\n\nThe point of view is similar in spirit to abelianisation of Higgs bundles, aka the spectral correspondence: Higgs bundles on $X$ are put in correspondence with rank-one Higgs line bundles on a spectral cover $\\Sigma\\to X$. However, unlike Higgs bundles, abelianisation of connections requires the introduction of a new object, which we call the Voros cocycle.\n\nThe Voros cocycle is a cohomological way to encode objects such as ideal triangulations that appeared in Fock-Goncharov, spectral networks that appeared in Gaiotto-Moore-Neitzke, as well as the connection matrices appearing in the WKB analysis.\n\nBy focusing our attention on the simplest case of logarithmic singularities with generic residues, I will describe an equivalence of categories, which I call the abelianisation functor, between $\\mathfrak{sl}(2)$-connections on $X$ satisfying a certain transversality condition and rank-one connections on an appropriate 2-fold spectral cover $\\Sigma \\to X$. This presentation is based on the work completed in my thesis (2018) and recent extensions thereof.",
    "2024-11-05": "I will recall the WKB method for Schrödinger equations and explain how to make sense of it in more invariant and geometric terms. I will then explain why Schrödinger equations on compact Riemann surfaces have the so-called quantum resurgence property: the Borel transform of a formal WKB solution is is a holomorphic germ which defines an infinite Riemann surface with very interesting geometry completely reflected in the geometry of the spectral curve associated with the Schrödinger operator.\n\nBased on arXiv:2410.17224.",
    "2025-03-31": "I will explain through examples my recent proof of the longstanding Quantum Resurgence Conjecture of Voros and Écalle. The proof uses purely geometric techniques involving spectral curves, Lie groupoids, and constructing global complex flows of meromorphic vector fields.",
    "2025-03-18": "The first Painlevé equation with a perturbation parameter ħ is easy to solve in formal ħ-power series, but this solution is necessarily divergent. We prove that this divergent series is resurgent, which means it is Borel summable in almost every direction and the associated Stokes phenomenon is describable in terms of the Borel resummation of singularities of the Borel transform.\n\nIn particular, the Borel transform of this formal solution admits endless analytic continuation with the following remarkable geometric structure: it naturally defines a global multivalued singular function on an algebraic surface isomorphic to the Fermat quintic surface x^5 + y^5 + z^5 = 0 modulo an involution. This surface is an algebraic fibration over the complex plane of the differential equation with the generic fibre a smooth quintic curve.\n\nThe locus of singularities of the Borel transform intersects each fibre in exactly five points. Each fibre has a fivefold branched covering map to a complex plane (the Borel plane) with five ramification points of order five which are precisely the five singular points of the Borel transform. Based on joint work in preparation with M. Alameddine, O. Marchal, and N. Orantin.",
    "2025-02-13": "Abstract: I will recall the WKB method for Schrödinger equations and explain how to make sense of it in more invariant and geometric terms. I will then explain how to prove that Schrödinger equations on compact Riemann surfaces have the so-called quantum resurgence property: the Borel transform of a formal WKB solution is a holomorphic germ that extends to a global holomorphic function on an infinite Riemann surface with exponential bounds at infinity.\n\nThis infinite Riemann surface has a rich geometry that is built out of the geometry of the spectral curve and completely governs the Stokes phenomenon in the WKB method. Based on arXiv:2410.17224.",
    "2024-03-04": "I will present recent progress in the amazing newly emerging subject called exact perturbation theory. This theory provides methods to upgrade divergent perturbative expansions to analytic information.\n\nOne such method is called Borel resummation: it involves a detailed analysis (via a Borel transform) of a given divergent perturbative expansion in order to recover the nonperturbative corrections (i.e., exponentially small terms) that otherwise cannot be captured by the ordinary perturbation theory.\n\nThe astounding big-picture upshot of this theory is that — contrary to Freeman Dyson’s conclusion that perturbation theory is incomplete — the divergent sector of perturbation theory actually already encodes all the necessary nonperturbative information, and it is therefore only a matter of applying suitable methods to extract it.\n\nOne of the most classical settings for exact perturbation theory is the so-called exact WKB method for solving linear ODEs like the Schrödinger equation. Such ODEs can be easily solved in (exponential) power series (the so-called WKB ansatz), but they are almost always divergent. Attempting to apply Borel resummation to get true analytic solutions turns out to be the correct approach, but a difficult mathematical problem.\n\nI will describe a geometric solution that I have developed through a series of recent and upcoming works. I hope to mention at least some of the wide-ranging applications of this Theorem which include topics like the symplectic geometry of moduli spaces of flat connections and Higgs bundles, cluster varieties, and even Donaldson-Thomas invariants of Calabi-Yau threefolds or BPS invariants in string theory.",
    "2023-10-17": "I will explain in some detail my recent proof of Borel summability of WKB solutions of singularly perturbed higher-order linear ODEs. The proof consists of reducing the problem to a matrix Riccati differential equation in a standard form. Applying the Borel transform, we get a nonlinear PDE which we solve using the method of successive approximations.\n\nThe biggest challenge is to show that this solution can be analytically continued along a ray in the Borel plane, and this involves keeping track of an interesting Stokes phenomenon.",
    "2023-09-06": "The exact WKB method for solving linear ODEs with a small parameter is one of the most classical examples of Exact Perturbation Theory. ODEs — such as the stationary Schrödinger equation or the Berk-Nevins-Roberts equation — can be easily solved in exponential power series: this is the famous WKB ansatz. The resulting formal WKB solutions, however, are always divergent and therefore have no direct analytic meaning.\n\nAttempting to apply the Borel resummation to get true analytic solutions turns out to be the correct approach, but a difficult mathematical problem, especially for equations of higher-order. I will describe a solution to this problem that I have developed through a series of recent works. The key new insights come from developing a careful understanding of the geometry that controls the underlying Stokes phenomenon.\n\nAnother advantage of this solution is that the constructions involved in the proof are purely geometric, allowing for an uplift to an algebro-geometric formulation of the exact WKB method for meromorphic connections in terms of finding invariant splittings of extensions of vector bundles.",
    "2023-05-31": "One of the most classical settings for Exact Perturbation Theory is the exact WKB method for solving singularly perturbed linear ODEs such as the Schrödinger equation. Such ODEs can be easily solved in exponential power series: this is the famous WKB ansatz. The resulting formal WKB solutions, however, are always divergent and therefore have no direct analytic meaning.\n\nAttempting to apply the Borel resummation to get true analytic solutions turns out to be the correct approach, but a difficult mathematical problem, especially for equations of higher-order. I will describe a solution to this problem that I have developed through a series of recent works. Another outcome of this solution is that the constructions involved in the proof can be made completely geometrically invariant.\n\nSo I will also describe an algebro-geometric formulation of the WKB method for meromorphic connections in terms of invariant splittings of bundle extensions.",
    "2023-05-02": "One of the most classical settings for Exact Perturbation Theory is the exact WKB method for solving singularly perturbed linear ODEs such as the Schrödinger equation. Such ODEs can be easily solved in exponential power series: this is the famous WKB ansatz. The resulting formal WKB solutions, however, are always divergent and therefore have no direct analytic meaning.\n\nAttempting to apply the Borel resummation to get true analytic solutions turns out to be the correct approach, but a difficult mathematical problem, especially for equations of higher-order. I will describe a solution to this problem that I have developed through a series of recent works. Another outcome of this solution is that the constructions involved in the proof can be made completely geometrically invariant.\n\nSo I will also describe an algebro-geometric formulation of the WKB method for meromorphic connections in terms of invariant splittings of bundle extensions.",
    "2023-04-17": "Perhaps surprisingly, flat meromorphic connections on holomorphic bundles over complex manifolds — objects that you’d probably consign to a purely differential-geometric context — can be equivalently studied using the representation theory of naturally associated groups or, better yet, Lie groupoids. The moduli spaces of these representations are really remarkable geometric objects that carry many interesting structures, including a symplectic structure and a cluster algebra structure.\n\nI will talk about various aspects of my ongoing series of projects to study these spaces using a method called abelianisation which one can think of as a kind of spectral theory for connections.",
    "2023-04-11": "One of the most classical settings for Exact Perturbation Theory is the exact WKB method for solving singularly perturbed linear ODEs such as the Schrödinger equation. Such ODEs can be easily solved in exponential power series: this is the famous WKB ansatz. The resulting formal WKB solutions, however, are always divergent and therefore have no direct analytic meaning.\n\nAttempting to apply the Borel resummation to get true analytic solutions turns out to be the correct approach, but a difficult mathematical problem, especially for equations of higher-order. I will describe a solution to this problem that I have developed through a series of recent works. Another outcome of this solution is that the constructions involved in the proof can be made completely geometrically invariant.\n\nSo I will also describe an algebro-geometric formulation of the WKB method for meromorphic connections in terms of invariant splittings of bundle extensions.",
    "2023-04-04": "Divergent series expansions naturally arise in many parts of mathematics and physics from dynamical systems, to gauge theory, to quantisation of Poisson structures, to mirror symmetry and stability in algebraic geometry, to QFT and string theory, to name a few. This course is an introduction to an amazing emerging subject of Exact Perturbation Theory, also known as the theory of Resurgence. This theory provides powerful methods to upgrade divergent expansions to some meaningful analytic information.\n\nOne such method is called Borel resummation: it involves a detailed analysis (via the Borel transform) of a given divergent expansion in order to recover exponentially small terms (a.k.a., nonperturbative corrections) that otherwise cannot be captured by the ordinary perturbation theory.\n\nThe astounding big-picture upshot of this theory is that — contrary to Freeman Dyson’s conclusion that perturbation theory is incomplete — the divergent sector of perturbation theory actually already encodes all the necessary nonperturbative information, and it is therefore only a matter of applying suitable methods to extract it.\n\nMy aim is to give a systematic treatment of the subject to build a solid foundation. Most of this course therefore will focus on the basic theory of divergent series and Borel resummation. At heart, the subject is just an extension of the ordinary complex analysis, and I will repeatedly stress this sentiment because I think it helps to demystify the subject. We will see, however, that this extension is exceptionally rich and full of remarkable new phenomena.\n\nAnother feature that I find extraordinary (and that I will emphasise throughout the course) is that, although at first this subject may appear to be confined purely within the realm of analysis, in fact it has as much an algebro-geometric flavour as an analytic one.\n\nI hope to cover the following topics: basic theory of asymptotic expansions, the Borel-Laplace transform, asymptotic expansions with factorial growth, Borel resummation and the Borel-Laplace Method, Stokes phenomenon, endless analytic continuation, algebra of resurgent transseries.",
    "2023-03-07": "Perhaps surprisingly, flat meromorphic connections on holomorphic bundles over complex manifolds — objects that you’d probably consign to a purely differential-geometric context — can be equivalently studied using the representation theory of naturally associated groups or, better yet, Lie groupoids. The moduli spaces of these representations are really remarkable geometric objects that carry many interesting structures, including a symplectic structure and a cluster algebra structure.\n\nI will talk about various aspects of my ongoing series of projects to study these spaces using a method called abelianisation which one can think of as a kind of spectral theory for connections.",
    "2023-03-02": "I will present recent progress in the amazing newly emerging subject of exact perturbation theory. This theory provides methods to upgrade divergent perturbative expansions to analytic information. One such method is called Borel resummation: it involves a detailed analysis (via a Borel transform) of a given divergent perturbative expansion in order to recover the nonperturbative corrections (i.e., exponentially small terms) that otherwise cannot be captured by the ordinary perturbation theory.\n\nThe astounding big-picture upshot of this theory is that — contrary to Freeman Dyson’s conclusion that perturbation theory is incomplete — the divergent sector of perturbation theory actually already encodes all the necessary nonperturbative information, and it is therefore only a matter of applying suitable methods to extract it.\n\nOne of the most classical settings for exact perturbation theory is the so-called exact WKB method for solving singularly perturbed linear ODEs such as the Schrödinger equation. Such ODEs can be easily solved in (exponential) power series (the so-called WKB ansatz), but they are almost always divergent. Attempting to apply Borel resummation to get true analytic solutions turns out to be the correct approach, but a difficult mathematical problem.\n\nI will describe a solution I have developed through a series of recent works.",
    "2023-02-24": "I will present recent progress in the amazing newly emerging subject of exact perturbation theory. This theory provides methods to upgrade divergent perturbative expansions to analytic information. One such method is called Borel resummation: it involves a detailed analysis (via a Borel transform) of a given divergent perturbative expansion in order to recover the nonperturbative corrections (i.e., exponentially small terms) that otherwise cannot be captured by the ordinary perturbation theory.\n\nThe astounding big-picture upshot of this theory is that — contrary to Freeman Dyson’s conclusion that perturbation theory is incomplete — the divergent sector of perturbation theory actually already encodes all the necessary nonperturbative information, and it is therefore only a matter of applying suitable methods to extract it.\n\nOne of the most classical settings for exact perturbation theory is the so-called exact WKB method for solving singularly perturbed linear ODEs such as the Schrödinger equation. Such ODEs can be easily solved in (exponential) power series (the so-called WKB ansatz), but they are almost always divergent. Attempting to apply Borel resummation to get true analytic solutions turns out to be the correct approach, but a difficult mathematical problem.\n\nI will describe a solution I have developed through a series of recent works.",
    "2023-02-17": "Perhaps surprisingly, flat meromorphic connections on holomorphic bundles over complex manifolds — objects that you’d probably consign to a purely differential-geometric context — can be equivalently studied using the representation theory of naturally associated groups or, better yet, Lie groupoids. The moduli spaces of these representations are really remarkable geometric objects that carry many interesting structures, including a symplectic structure and a cluster algebra structure.\n\nI will talk about various aspects of my ongoing series of projects to study these spaces using a method called abelianisation which one can think of as a kind of spectral theory for connections.",
    "2023-01-30": "One of the most classical settings for Exact Perturbation Theory is the exact WKB method for solving singularly perturbed linear ODEs such as the Schrödinger equation. Such ODEs can be easily solved in exponential power series: this is the famous WKB ansatz. The resulting formal WKB solutions, however, are always divergent and therefore have no direct analytic meaning.\n\nAttempting to apply the Borel resummation to get true analytic solutions turns out to be the correct approach, but a difficult mathematical problem, especially for equations of higher-order. I will describe a solution to this problem that I have developed through a series of recent works. Another outcome of this solution is that the constructions involved in the proof can be made completely geometrically invariant.\n\nSo I will also describe an algebro-geometric formulation of the WKB method for meromorphic connections in terms of invariant splittings of bundle extensions.",
    "2021-03-01": "The singularly perturbed Riccati equation is one of the simplest first-order nonlinear ODEs of the form $\\hbar f' = af^2 + bf + c$ containing a small perturbation parameter $\\hbar$.\n\nThis equation plays an absolutely crucial role in the exact WKB analysis of Schrödinger equations and more general families of meromorphic connections on Riemann surfaces, where the goal is to canonically construct analytic $\\hbar$-dependent data (e.g., solutions, flat sections, filtrations of vector bundles, etc) out of the corresponding asymptotic data obtained in the limit as $\\hbar \\to 0$.\n\nPart of the appeal is that the latter is normally a lot easier to analyse, much in the same way as a power series is usually a simpler object than the corresponding analytic function. However, the trouble is that attempting to solve the Riccati equation in power series in $\\hbar$ almost always leads to divergent series, and converting this formal data into the desired analytic data (i.e., promoting formal solutions to exact solutions) is quite a nontrivial task.\n\nThis is a quintessential problem in singular perturbation theory.\n\nI will carefully go through the proof of an existence and uniqueness theorem for exact solutions from my recent paper (arXiv:2008.06492). The uniqueness part of this theorem is particularly important because it means that our construction gives a canonical way to promote formal solutions (i.e., asymptotic data) to exact solutions (i.e., analytic data). The construction is via the Borel-Laplace method (a.k.a., Borel resummation).\n\nI will therefore give a crash course in the theory of Borel-Laplace transforms and Gevrey asymptotics, all the while keeping the discussion as elementary as possible."
  };

  // Abstracts supplied by the author. String.raw preserves the original LaTeX notation.
  const suppliedAbstracts = {
    '2024-07-01': String.raw`Divergent series expansions naturally arise in many parts of mathematics and physics including dynamical systems, gauge theory, quantisation of Poisson structures, mirror symmetry and stability in algebraic geometry, quantum field theory and string theory, and the list goes on. This mini-course is an introduction to an amazing emerging subject of Exact Perturbation Theory, also known as Resurgence. This theory provides powerful methods to upgrade a priori meaningless divergent expansions to meaningful analytic information. One such method is called Borel resummation: it involves a detailed analysis (via the Borel-Laplace transform) of a given divergent expansion in order to recover exponentially small terms (a.k.a. nonperturbative corrections) that otherwise cannot be captured in ordinary perturbation theory. The astounding big-picture upshot of this theory is that — contrary to Freeman Dyson’s conclusion that perturbation theory is incomplete — the divergent sector of perturbation theory actually already ’knows’ all the necessary nonperturbative information, and it is therefore only a matter of applying suitable methods to extract it.

My aim is to give a systematic treatment of the subject to build a solid foundation. Most of this course therefore will focus on the basic theory of divergent series and Borel resummation. At heart, the subject is just an extension of the ordinary complex analysis, and I will repeatedly stress this sentiment because I think it helps to demystify the subject. We will see, however, that this extension is exceptionally rich and full of remarkable new phenomena. Another feature that I find extraordinary and that I will emphasise throughout the course, is that, although at first sight this subject may appear to be confined to analysis, in fact it has as much an algebraic and geometric flavour as an analytic one.

I hope to cover the following topics: basic theory of asymptotic expansions, the Borel-Laplace transform, asymptotic expansions with factorial growth, Borel resummation and the Borel-Laplace Method, Stokes phenomenon, endless analytic continuation, algebra of resurgent transseries, exact WKB method.`,

    '2026-01-04': String.raw`Divergent series expansions naturally arise in many parts of mathematics and physics from dynamical systems, to gauge theory, to quantisation of Poisson structures, to mirror symmetry and stability in algebraic geometry, to QFT and string theory, to name a few. This course is an introduction to an amazing emerging subject of Exact Perturbation Theory, also known as the theory of Resurgence. This theory provides powerful methods to upgrade divergent expansions to some meaningful analytic information. One such method is called Borel resummation: it involves a detailed analysis (via the Borel transform) of a given divergent expansion in order to recover exponentially small terms (a.k.a., nonperturbative corrections) that otherwise cannot be captured by the ordinary perturbation theory. The astounding big-picture upshot of this theory is that -— contrary to Freeman Dyson’s conclusion that perturbation theory is incomplete -— the divergent sector of perturbation theory actually already encodes all the necessary nonperturbative information, and it is therefore only a matter of applying suitable methods to extract it.

My aim is to give a systematic treatment of the subject to build a solid foundation. Most of this course therefore will focus on the basic theory of divergent series and Borel resummation. At heart, the subject is just an extension of the ordinary complex analysis, and I will repeatedly stress this sentiment because I think it helps to demystify the subject. We will see, however, that this extension is exceptionally rich and full of remarkable new phenomena. Another feature that I find extraordinary (and that I will emphasise throughout the course) is that, although at first this subject may appear to be confined purely within the realm of analysis, in fact it has as much an algebro-geometric flavour as an analytic one.`,

    '2025-10-21': String.raw`I will recall the WKB method for Schrödinger equations and explain how to make sense of it in geometric terms. I will then explain some ingredients of my proof of the so-called Quantum Resurgence Conjecture, a longstanding open problem in mathematical physics. The upshot is that the Borel transform of a formal WKB solution naturally defines a holomorphic family of infinite Riemann surfaces with very interesting geometry that encodes the singularities and the Stokes phenomenon of exact WKB solutions using the periods of a spectral curve. Based on arXiv:2410.17224.`,

    '2022-11-14': String.raw`In this talk, I will describe some interesting geometry on the moduli space of $\lambda$-connections. First, I will explain what I mean by a $\lambda$-connection and show how this object can be abelianised to a $\lambda$-connection of rank one by extending the spectral correspondence for Higgs bundles to flat bundles. I will then describe how this abelianisation correspondence can be used to define interesting geometric structures on the moduli space of $\mathrm{SL}(2,\mathbb{C})$-$\lambda$-connections: namely, a complex hyperKähler structure as well as what looks like a completely integrable system but with fibres being abelian character varieties rather than abelian varieties.`,

    '2022-10-03': String.raw`In the pre-talk, I’ll explain in as elementary terms as possible what a λ-connection is. In the seminar, I’ll explain how a λ-connection on a vector bundle can be abelianised to a λ-connection on a line bundle over a spectral cover. The cool thing is that this operation is a birational equivalence of moduli stacks (proved for SL(2), work in progress in general) and equips (an open subset of) the stack of λ-connections with what looks like a completely integrable system but with fibres being abelian character varieties rather than abelian varieties (which means isomorphic to a product of C* rather than the Picard or Prym of the spectral curve).`,

    '2022-05': String.raw`The moduli space of Higgs bundles on an algebraic curve is an incredible object. It is an algebraic space which has the structure of a real hyperkähler manifold (the nonabelian Hodge space). It also comes equipped with a holomorphic submersion (the Hitchin map) onto an affine space (the Hitchin base) whose generic fibre is a half-dimensional abelian variety $(\mathbb{S}^1)^{2d}$ (this is the Hitchin integrable system structure). Our interest instead is in $\lambda$-connections, by which we mean $\mathbb{P}^1$-families of flat bundles degenerating to a Higgs bundle at $\lambda = 0$. Somewhat analogously, we construct in the $\mathrm{SL}(2)$ case a moduli space of $\lambda$-connections and show that it is an algebraic space which has the structure of a complex hyperkähler manifold that comes equipped with a holomorphic submersion whose generic fibre is a half-dimensional abelian character variety $(\mathbb{C}^\ast)^{2d}$.`,

    '2022-03-23': String.raw`Complex singular differential equations play a major role far beyond pure mathematics: classical equations like Airy, Bessel, and Schrödinger equations are just some famous examples that appear in physics and engineering. As geometers, we prefer to study their geometric generalisations called meromorphic connections on holomorphic vector bundles over Riemann surfaces (a.k.a. "differential equations on steroids"). There are many excellent reasons to do this: one is that their moduli spaces (i.e., spaces of equivalence classes) have an incredibly rich geometry that links with a vast variety of subjects from (to name just a few) integrable systems and Poisson geometry, to quantum algebras and representation theory, to Gromov-Witten theory and quantum field theory. Moduli spaces of connections are exceptionally captivating objects, "a gift to geometry that keeps on giving" as some of us would say.

In broad and as accessible terms as possible, I will present a little bit of this really fascinating story to give you a sense or a glimpse of the subject’s richness. At the end, I will mention a word or two about a new geometric method (called abelianisation) to analyse higher-rank connections (i.e., higher-order differential equations) by placing them in correspondence with much simpler objects: rank-one connections (i.e., first-order differential equations) but over a geometrically more complicated Riemann surface.`,

    '2021-10-20': String.raw`I will describe an approach to analysing local systems on surfaces which is a functorial correspondence between local systems of rank n with C*-local systems an n-fold covering surface. Such an approach, called abelianisation, emerged in the last decade in the work of Gaiotto, Moore, Neitzke on spectral networks that arise in the context of supersymmetric gauge theories. It can be seen as a generalisation of the abelianisation of Higgs bundles (a.k.a., the spectral correspondence, a key step in the analysis of Hitchin integrable systems) to flat bundles. I will explain my point of view on the mathematical theory behind abelianisation (which involves the deformation theory of the direct image functor) and give an outlook of what kind of things I hope to prove in the near future.`,

    '2021-10-08': String.raw`We study $\hbar$-connections on vector bundles over Riemann surfaces. These are families of usual connections depending on a small complex parameter $\hbar$ which degenerate as $\hbar \to 0$ to a Higgs bundle. They can be holomorphic or meromorphic with regular or irregular poles along a divisor whose location is independent of $\hbar$. We prove that generically a vector bundle with an $\hbar$-connection has a canonical piecewise flat filtration (which we call the WKB filtration) that converges as $\hbar \to 0$ to the eigendecomposition of the corresponding Higgs bundle. Moreover, the WKB filtration for a meromorphic $\hbar$-connection coincides near each pole with the Levelt filtration, which is a canonical flat filtration determined by growth rates of flat sections as they are appropriately parallel transported into the pole.`,

    '2021-04-07': String.raw`We study meromorphic $\hbar$-connections on vector bundles over a Riemann surface. These are families of vector bundles with meromorphic connections, parameterised by a small complex parameter $\hbar$, which degenerate to a Higgs bundle in the limit as $\hbar \to 0$. I will show under rather general assumptions that (at least in rank two) the vector bundle has canonical flat filtrations whose limits as $\hbar \to 0$ in a halfplane converge to the eigendecomposition of the corresponding limiting Higgs bundle. These filtrations, which we call the WKB filtrations, are defined over certain open subsets given by real-flows of a certain holomorphic vector field obtained from the limiting Higgs field. The key to the construction of WKB filtrations is the ability to find exact solutions to a singularly perturbed Riccati equation. The name is derived from the fact that, in the special case where the $\hbar$-connection arises from a Schrödinger equation, the WKB filtrations are generated by local exact WKB solutions.

We also show that near each pole of the connection, the WKB filtration (at every fixed nonzero value of $\hbar$) coincides with the local Levelt filtration determined by growth rates of flat sections as they are parallel transported into the singular point. As a result, the WKB filtration is a very special filtration on the vector bundle which converges to the Higgs bundle eigendecomposition as $\hbar \to 0$ and also to the eigendecomposition of the connection’s principal part as we parallel transport into the pole.

Based on arXiv:1909.04011, arXiv:2008.06492, as well as current work in progress.`,

    '2021-03-19': String.raw`Meromorphic connections on Riemann surfaces (i.e., an invariant point of view on complex singular ODEs) can be understood as representations of relevant holomorphic Lie algebroids or equivalently (by integration, called the Riemann-Hilbert correspondence) as Lie groupoid representations. I will describe an approach to studying these objects called abelianisation. It uses simple combinatorial data attached to the Riemann surface (certain topological graphs) to recast the representations into the nonabelian group $\mathrm{GL}(n,\mathbb{C})$ instead as the rather more amicable representations into the abelian group $\mathbb{C}^\ast$ but on a suitable $n$-fold covering Riemann surface. This technique has its origins in the works of Fock-Goncharov (2006) and Gaiotto-Moore-Neitzke (2013), as well as the WKB analysis. I will explain this correspondence in the case $n=2$ as an equivalence of categories of representations. This presentation is based on arXiv:1902.03384 and the more recent work in progress extending those results.`,

    '2020-10-14': String.raw`I will describe an approach to analysing meromorphic connections on Riemann surfaces called abelianisation. It can be seen as a generalisation of the abelianisation of Higgs bundles (a.k.a., the spectral correspondence, a key step in the analysis of Hitchin integrable systems) to flat bundles. This approach emerged in the last decade in the work of Gaiotto, Moore, Neitzke on spectral networks that arise in the context of supersymmetric gauge theories. Our point of view via deformation theory sheds light on the mathematical content of the theory of spectral networks and makes clear the relationship with the spectral correspondence. Furthermore, our mathematical formulation allows us to connect abelianisation with an algebro-geometric formulation of the exact WKB method, which is the modern exact reincarnation of the much older WKB approximation method from quantum mechanics.`,

    '2020-09': String.raw`Given a Schrödinger equation in the complex domain, it is not difficult to construct a formal power series solution in the Planck constant ħ, the so-called formal WKB solutions. Such power series solutions are generically divergent series, and the question of whether they are the asymptotic expansions as ħ->0 of exact solutions (the so-called exact WKB solutions) has in general remained open. I will advertise my recent work (to appear) which gives an affirmative answer to this question in a large class of problems using methods from the theory of Borel-Laplace transformations.`,

    '2019-02-qgm-intro': String.raw`Logarithmic connections on Riemann surfaces is the geometric point of view on a class of singular ordinary differential equations. Obviously, these are fundamentally important objects, and there are many different ways to think about them. I will explain the way I like to think about them and give some concrete examples. The prerequisites are basic understanding of Riemann surfaces, sheaves, vector bundles, and categories.`,

    '2019-02-qgm-abelianisation': String.raw`I will describe an approach, called abelianisation, to studying logarithmic connections on vector bundles of higher rank over a complex curve X by putting them in correspondence with logarithmic connections on line bundles (a.k.a. abelian connections) over a multi-sheeted cover p: S -> X. In this talk, I will explain an equivalence between a category of logarithmic sl(2)-connections on X with fixed generic residues and a category of abelian logarithmic connections on an appropriate double cover p: S -> X. The proof is by constructing a pair of inverse functors, and the key is the construction of a certain canonical cocycle (which I call the Voros cocycle) valued in the automorphisms of the direct image functor p_*. Based on arXiv:1902.03384.`,

    '2018-12': String.raw`I will describe a new approach to studying meromorphic connections on vector bundles called abelianisation. This technique has its origins in the works of Fock-Goncharov (2006) and Gaiotto-Moore-Neitzke (2013), as well as the WKB analysis. Its essence is to put connections on rank-n vector bundles over a curve X in correspondence with much simpler objects: connections on line bundles over an n-fold spectral cover Σ -> X. The point of view is similar in spirit to abelianisation of Higgs bundles (aka the spectral correspondence); however, unlike Higgs bundles, abelianisation of connections requires the introduction of a new object, which I call the Voros cocycle. The Voros cocycle is a cohomological way to encode objects such as ideal triangulations that appeared in Fock-Goncharov, spectral networks that appeared in Gaiotto-Moore-Neitzke, as well as the connection matrices appearing in the WKB analysis. In this talk, I will describe abelianisation of logarithmic sl(2)-connections as an equivalence of categories. If time permits, I will also explain how this abelianisation equivalence can be generalised to ħ-connections, how it relates to the exact WKB analysis, and how it recovers the spectral correspondence in the limit as ħ goes to 0. This presentation is based on the work completed in my thesis (2018) and recent extensions thereof.`,

    '2018-05': String.raw`I will describe an approach to studying meromorphic connections on vector bundles called abelianisation. This technique has its origins in the works of Fock-Goncharov (2006) and Gaiotto-Moore-Neitzke (2013), as well as the WKB analysis. Its essence is to put rank-n connections on a complex curve X in correspondence with much simpler objects: connections on line bundles over an n-fold cover Σ -> X. The point of view is similar in spirit to abelianisation of Higgs bundles, aka the spectral correspondence: Higgs bundles on X are put in correspondence with rank-one Higgs line bundles on a spectral cover Σ -> X. However, unlike Higgs bundles, abelianisation of connections requires the introduction of a new object, which we call the Voros cocycle. The Voros cocycle is a cohomological way to encode objects such as ideal triangulations that appeared in Fock-Goncharov, spectral networks that appeared in Gaiotto-Moore-Neitzke, as well as the matrices appearing in the WKB analysis. By focusing our attention on the simplest case of logarithmic singularities with generic residues, we will describe an equivalence of categories, which we call the abelianisation functor, between gl(n)-connections on X satisfying a certain transversality condition and rank-one connections on an appropriate n-fold spectral cover Σ -> X. This presentation is based on the work completed in my thesis (2018) and recent extensions thereof.`,

    '2018-02': String.raw`In 1926, a method of asymptotic approximation of solutions to the Schrödinger equation, called WKB approximation, was developed by physicists Wentzel, Kramers, and Brillouin (and even earlier and in a more general context by other physicists and mathematicians). Beginning with the work of Voros (1983), and later other mathematicians and physicists, the WKB approximation was reformulated based on the theory of Borel resummation. In this form, it is known as the exact WKB method. It is a powerful computational method typically used in quantum mechanics: the wavefunction is modelled as an exponential function (known as the WKB ansatz) which is subsequently expanded as a power series in the 'semiclassical’ parameter ħ.

In this talk, I will first explain how the WKB method proceeds traditionally, emphasising the Schrödinger equation example. I will then give an algebro-geometric formulation of the WKB method in terms of vector bundle extensions and splittings. Time permitting, I will indicate the relationship of the WKB method with abelianisation of flat connections.`,
  };

  // The other December 2018 talk (Angers) must not inherit the IHP abstract.
  suppliedAbstracts['2018-12-ihp'] = suppliedAbstracts['2018-12'];
  delete suppliedAbstracts['2018-12'];

  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  let panelCounter = 0;
  function addOverview(article, overview, sourced = false) {
    const heading = article.querySelector('.d-talk-body h3');
    if (!heading || heading.querySelector('button')) return;
    const id = `talk-overview-${++panelCounter}`;
    const title = heading.textContent;
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'd-pub-title-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', id);
    toggle.append(document.createTextNode(`${title} `));
    const icon = document.createElement('span');
    icon.className = 'd-pub-toggle-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '+';
    toggle.append(icon);
    heading.replaceChildren(toggle);

    const panel = document.createElement('div');
    panel.className = 'd-pub-disclosure-body d-talk-overview';
    panel.id = id;
    panel.hidden = true;
    const description = article.querySelector('.d-talk-description');
    const content = overview || description?.textContent.trim();
    if (content) {
      const label = document.createElement('span');
      label.className = 'd-panel-label';
      label.textContent = sourced ? 'ABSTRACT' : (overview ? 'OVERVIEW' : 'DETAILS');
      panel.append(label);
      content.split(/\n\s*\n/).forEach((part) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = part;
        panel.append(paragraph);
      });
    }
    if (description) description.remove();
    const links = article.querySelector('.d-talk-links');
    if (links) {
      const label = document.createElement('span');
      label.className = 'd-panel-label d-talk-resource-label';
      label.textContent = 'RESOURCES';
      panel.append(label, links);
    }
    article.querySelector('.d-talk-body').append(panel);
  }

  function makeEntry(item, sectionId) {
    const entry = document.createElement('article');
    entry.className = 'd-talk-entry';
    entry.dataset.sort = item.date;
    const heading = item.event || item.title || 'Research talk';
    const description = item.location || '';
    const talkTitle = item.title && item.event !== item.title ? item.title : null;
    entry.innerHTML = `<div class="d-talk-date"><time datetime="${escapeHTML(item.date)}">${escapeHTML(item.when)}</time>${item.count ? `<span>${escapeHTML(item.count)}</span>` : ''}</div>
      <div class="d-talk-body"><h3>${escapeHTML(heading)}</h3><p class="d-talk-meta">${escapeHTML(description)}</p>
      ${talkTitle ? `<p class="d-talk-talk-title">${escapeHTML(talkTitle)}</p>` : ''}
      ${item.links?.length ? `<div class="d-talk-links">${item.links.map(([label, url]) => `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} <span aria-hidden="true">↗</span></a>`).join('')}</div>` : ''}</div>`;
    if (!item.title) entry.classList.add('d-talk-venue-only');
    if (item.overview) entry.dataset.overview = item.overview;
    if (item.abstractKey) entry.dataset.abstractKey = item.abstractKey;
    return entry;
  }

  // Move the older hand-written research mini-course cards into the research-level section.
  // MAPSS mini-course titles remain as card headings beneath one shared subsection heading.
  const mapssList = document.getElementById('lecture-course-list');
  const researchCourseList = document.getElementById('research-course-list');
  if (mapssList && researchCourseList) {
    [...mapssList.querySelectorAll('.d-talk-entry')].forEach((entry) => {
      const body = entry.querySelector('.d-talk-body');
      const title = body.querySelector('h3').textContent.trim();
      const meta = body.querySelector('.d-talk-meta');
      const [event, ...parts] = meta.textContent.split(' · ');
      if (!/MAPSS/.test(event)) {
        body.querySelector('h3').textContent = event;
        meta.textContent = parts.join(' · ');
        const italicTitle = document.createElement('p');
        italicTitle.className = 'd-talk-talk-title';
        italicTitle.textContent = title;
        meta.after(italicTitle);
        researchCourseList.append(entry);
      }
    });
  }

  for (const [id, items] of [
    ['research-course-list', courses.filter((item) => !/MAPSS/.test(item.event || ''))],
    ['lecture-course-list', courses.filter((item) => /MAPSS/.test(item.event || ''))],
    ['research-talk-list', talks]
  ]) {
    const list = document.getElementById(id);
    if (!list) continue;
    items.forEach((item) => list.append(makeEntry(item, id)));
    list.querySelectorAll('.d-talk-entry').forEach((entry) => {
      entry.dataset.sort ||= entry.querySelector('time')?.getAttribute('datetime') || '0000';
    });
    [...list.children].sort((left, right) => right.dataset.sort.localeCompare(left.dataset.sort)).forEach((entry) => list.append(entry));
  }

  // Each MAPSS mini-course has its own card; the shared school details appear once above them.
  if (mapssList) {
    [...mapssList.querySelectorAll(':scope > .d-talk-entry')].forEach((entry) => {
      const body = entry.querySelector('.d-talk-body');
      const title = body.querySelector('.d-talk-talk-title')?.textContent.trim() || body.querySelector('h3').textContent.trim();
      body.querySelector('h3').textContent = title;
      body.querySelector('.d-talk-talk-title')?.remove();
      body.querySelector('.d-talk-meta')?.remove();
    });
  }

  // Keep the location line consistent across the CV entries and the older hand-written cards.
  const countryFlags = [
    ['United Kingdom', '🇬🇧'], ['United States', '🇺🇸'], ['Switzerland', '🇨🇭'],
    ['Germany', '🇩🇪'], ['Spain', '🇪🇸'], ['Japan', '🇯🇵'],
    ['Denmark', '🇩🇰'], ['Italy', '🇮🇹'], ['France', '🇫🇷'],
    ['Canada', '🇨🇦'], ['Netherlands', '🇳🇱'], ['Austria', '🇦🇹'],
    ['Romania', '🇷🇴']
  ];
  document.querySelectorAll('.d-talk-entry .d-talk-meta').forEach((meta) => {
    let location = meta.textContent.trim();
    if (!countryFlags.some(([country]) => location.includes(country))) {
      if (/SwissMAP Research Station|Les Diablerets/.test(location)) location += ', Switzerland';
      else if (/Fields Institute, Toronto/.test(location)) location += ', Canada';
      else if (/Stony Brook|Kansas State University/.test(location)) location += ', United States';
    }
    countryFlags.forEach(([country, flag]) => {
      if (location.includes(country)) location = location.replace(country, `${country} ${flag}`);
    });
    meta.textContent = location;
  });

  verifiedOverviews.forEach(({list, title, overview, starts}) => {
    const target = list === 'lecture-course-list' ? document.getElementById('lecture-courses') : document.getElementById(list);
    const article = [...target.querySelectorAll('.d-talk-entry')]
      .find((entry) => entry.querySelector('.d-talk-talk-title')?.textContent.trim() === title && (!starts || entry.dataset.sort.startsWith(starts)));
    if (article) article.dataset.overview = overview;
  });

  document.querySelectorAll('.d-talk-entry').forEach((entry) => {
    const date = entry.dataset.sort || entry.querySelector('time')?.getAttribute('datetime');
    const key = entry.dataset.abstractKey || date;
    const abstract = suppliedAbstracts[key] || sourceAbstracts[key];
    const overview = abstract || entry.dataset.overview;
    if (overview || entry.querySelector('.d-talk-links, .d-talk-description')) addOverview(entry, overview, Boolean(abstract));
  });

  document.querySelectorAll('.d-mini-group').forEach((group) => {
    const count = group.querySelectorAll('.d-talk-entry').length;
    const note = group.querySelector('.d-mini-group-count');
    if (note) note.textContent = `${count} ${count === 1 ? 'COURSE' : 'COURSES'}`;
  });

  // Abstracts use dates because the same talk title can be given at several venues.

  document.querySelectorAll('.d-talks-section').forEach((section) => {
    const buttons = [...section.querySelectorAll('.d-pub-title-toggle')];
    const heading = section.querySelector('.d-talks-heading');
    const note = heading?.querySelector('.d-talks-heading-note');
    if (note) {
      const count = section.querySelectorAll('.d-talk-entry').length;
      note.textContent = `${count} ${count === 1 ? 'ENTRY' : 'ENTRIES'}`;
    }
    if (!buttons.length || !heading) return;

    const expandAll = document.createElement('button');
    expandAll.type = 'button';
    expandAll.className = 'd-pub-expand-all';
    expandAll.setAttribute('aria-expanded', 'false');
    expandAll.setAttribute('aria-controls', buttons.map((button) => button.getAttribute('aria-controls')).join(' '));
    expandAll.innerHTML = 'Expand all <span aria-hidden="true">+</span>';
    heading.append(expandAll);

    const setExpanded = (button, expanded) => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      if (!panel) return;
      button.setAttribute('aria-expanded', String(expanded));
      button.querySelector('.d-pub-toggle-icon').textContent = expanded ? '−' : '+';
      panel.hidden = !expanded;
    };
    const update = () => {
      const allExpanded = buttons.every((button) => button.getAttribute('aria-expanded') === 'true');
      const action = allExpanded ? 'Collapse all' : 'Expand all';
      expandAll.setAttribute('aria-expanded', String(allExpanded));
      expandAll.setAttribute('aria-label', `${action} ${section.querySelector('.d-title-name').textContent.toLowerCase()}`);
      expandAll.firstChild.textContent = `${action} `;
      expandAll.querySelector('span').textContent = allExpanded ? '−' : '+';
    };
    buttons.forEach((button) => button.addEventListener('click', () => {
      setExpanded(button, button.getAttribute('aria-expanded') !== 'true');
      update();
    }));
    expandAll.addEventListener('click', () => {
      const openAll = buttons.some((button) => button.getAttribute('aria-expanded') !== 'true');
      buttons.forEach((button) => setExpanded(button, openAll));
      update();
    });
    update();
  });
})();
