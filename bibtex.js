// Citations follow the published journal version when one is available.
// Keys are tied to the publication disclosure IDs, not to their page order.
const bibliography = {
  'pub-2610-38972': {
    kind: 'misc', key: 'Nikolaev2026SpectralStructures',
    author: 'Nikolaev, Nikita', title: 'Spectral Structures on Vector Bundles',
    year: '2026', eprint: '2610.38972', primaryClass: 'math.AG'
  },
  'pub-2610-20123': {
    kind: 'misc', key: 'Alameddine2026WKBRiemannHilbert',
    author: 'Alameddine, Mohamad and Marchal, Olivier and Nikolaev, Nikita and Orantin, Nicolas',
    title: 'The WKB Riemann–Hilbert Problem for the Painlevé I System',
    year: '2026', eprint: '2610.20123', primaryClass: 'math-ph'
  },
  'pub-2603-18842': {
    kind: 'misc', key: 'Facciotti2026DecoratedLocalSystems',
    author: 'Facciotti, Benedetta and Mazzocco, Marta and Nikolaev, Nikita',
    title: 'Decorated Local Systems and Character Varieties',
    year: '2026', eprint: '2603.18842', primaryClass: 'math.AG'
  },
  'pub-2503-12290': {
    kind: 'misc', key: 'Alameddine2025Tritronquees',
    author: 'Alameddine, Mohamad and Marchal, Olivier and Nikolaev, Nikita and Orantin, Nicolas',
    title: 'Resurgence of Tritronquées Solutions of the Deformed Painlevé I Equation',
    year: '2025', eprint: '2503.12290', primaryClass: 'math.DG'
  },
  'pub-2410-17224': {
    kind: 'misc', key: 'Nikolaev2024GeometryResurgenceWKB',
    author: 'Nikolaev, Nikita',
    title: 'Geometry and Resurgence of WKB Solutions of Schrödinger Equations',
    year: '2024', eprint: '2410.17224', primaryClass: 'math.DG'
  },
  'pub-2201-04526': {
    kind: 'misc', key: 'Nikolaev2022ExactPerturbative',
    author: 'Nikolaev, Nikita', title: 'An Exact Perturbative Existence and Uniqueness Theorem',
    year: '2022', eprint: '2201.04526', primaryClass: 'math.CA'
  },
  'pub-1909-04011': {
    kind: 'misc', key: 'Nikolaev2019InvariantFlags',
    author: 'Nikolaev, Nikita',
    title: 'Invariant Flags for Singularly Perturbed Logarithmic Systems of Rank Two',
    year: '2019', note: 'Substantially revised 2026', eprint: '1909.04011', primaryClass: 'math.CA'
  },
  'pub-2112-08792': {
    kind: 'article', key: 'Nikolaev2024GevreyImplicitFunction',
    author: 'Nikolaev, Nikita', title: 'Gevrey Asymptotic Implicit Function Theorem',
    journal: 'L’Enseignement Mathématique', volume: '70', number: '1--2', pages: '251--282',
    year: '2024', doi: '10.4171/LEM/1061', eprint: '2112.08792', primaryClass: 'math.CV'
  },
  'pub-2106-10248': {
    kind: 'article', key: 'Nikolaev2023ExactWKBSolutions',
    author: 'Nikolaev, Nikita',
    title: 'Existence and Uniqueness of Exact WKB Solutions for Second-Order Singularly Perturbed Linear ODEs',
    journal: 'Communications in Mathematical Physics', volume: '400', pages: '463--517',
    year: '2023', doi: '10.1007/s00220-022-04603-7', eprint: '2106.10248', primaryClass: 'math.AP'
  },
  'pub-2008-06492': {
    kind: 'article', key: 'Nikolaev2023Riccati',
    author: 'Nikolaev, Nikita',
    title: 'Exact Solutions for the Singularly Perturbed Riccati Equation and Exact WKB Analysis',
    journal: 'Nagoya Mathematical Journal', volume: '250', pages: '434--469',
    year: '2023', doi: '10.1017/nmj.2022.38', eprint: '2008.06492', primaryClass: 'math.CA'
  },
  'pub-1902-03384': {
    kind: 'article', key: 'Nikolaev2021Abelianisation',
    author: 'Nikolaev, Nikita', title: 'Abelianisation of Logarithmic sl(2)-Connections',
    journal: 'Selecta Mathematica', volume: '27', pages: '78',
    year: '2021', doi: '10.1007/s00029-021-00688-5', eprint: '1902.03384', primaryClass: 'math.AG'
  },
  'pub-2605-12572': {
    kind: 'misc', key: 'Facciotti2026ChewingGums',
    author: 'Facciotti, Benedetta and Mazzocco, Marta and Nikolaev, Nikita',
    title: 'Chewing Gums, Snakes and Candle Cakes',
    year: '2026', note: 'Lecture notes', eprint: '2605.12572', primaryClass: 'math.GT'
  },
  'pub-zbl-1480-01072': {
    kind: 'article', key: 'Matveeva2021YoungMathematicians',
    author: 'Matveeva, Anastasia and Nikolaev, Nikita and Salnikov, Vladimir and Garmendia, Alfonso and Ryvkin, Leonid',
    title: 'Young mathematicians’ column',
    journal: 'European Mathematical Society Magazine', volume: '119', pages: '40--43',
    year: '2021', doi: '10.4171/MAG-7'
  }
};

function formatBibTeX(item) {
  const order = ['author', 'title', 'journal', 'volume', 'number', 'pages', 'year', 'note', 'doi', 'eprint', 'archivePrefix', 'primaryClass', 'url'];
  const fields = { ...item };
  if (item.eprint) {
    fields.archivePrefix = 'arXiv';
    fields.url = `https://arxiv.org/abs/${item.eprint}`;
  }
  return `@${item.kind}{${item.key},\n${order.filter((name) => fields[name]).map((name) => {
    const value = name === 'title' ? `{${fields[name]}}` : fields[name];
    return `  ${name} = {${value}}`;
  }).join(',\n')}\n}`;
}

async function copyCitation(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const field = document.createElement('textarea');
  field.value = text;
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand('copy');
  field.remove();
  if (!copied) throw new Error('Copy unavailable');
}

document.querySelectorAll('.d-pub-entry').forEach((entry) => {
  const id = entry.querySelector('.d-pub-disclosure-body')?.id;
  const item = bibliography[id];
  const meta = entry.querySelector('.d-pub-meta');
  if (!item || !meta) return;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'd-pub-bibtex';
  button.textContent = 'Copy BibTeX';
  const title = entry.querySelector('.d-pub-title-toggle')?.textContent.replace('+', '').trim() || 'publication';
  button.setAttribute('aria-label', `Copy BibTeX citation for ${title}`);
  const separator = document.createElement('span');
  separator.className = 'd-pub-sep';
  separator.textContent = ' · ';
  meta.append(separator, button);

  let resetTimer;
  button.addEventListener('click', async () => {
    clearTimeout(resetTimer);
    try {
      await copyCitation(formatBibTeX(item));
      button.textContent = 'Copied ✓';
      button.setAttribute('aria-label', `BibTeX citation copied for ${title}`);
    } catch {
      button.textContent = 'Copy failed';
    }
    resetTimer = setTimeout(() => {
      button.textContent = 'Copy BibTeX';
      button.setAttribute('aria-label', `Copy BibTeX citation for ${title}`);
    }, 2400);
  });
});
