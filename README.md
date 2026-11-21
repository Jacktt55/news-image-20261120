# news-image-20261120

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun)

One image summing up world news of **Friday, 20 November 2026** — a newspaper
front page for the make.fun bounty *"Sum up 20 November's world news in one image"*
($250, top 50).

## The seven stories

1. **Russia strikes three Kyiv bridges** — around 110 missiles and 400+ drones hit
   nine regions overnight into Friday, killing eight and cutting power in Kyiv; the
   strikes follow three Ukrainian attacks on the Kerch Bridge this week.
2. **Russian objects enter Polish airspace** — three objects, believed to be two
   missiles and a jet drone, crashed near three villages. No casualties; PM Donald
   Tusk called it a "deliberate provocation".
3. **UK and EU agree post-Brexit reset** — a deal in Brussels eases food and farm
   trade, links emissions trading and opens youth mobility (ages 18–31). Entry may
   slip six months over EU tuition-fee demands.
4. **Wall Street sinks as Nvidia slides** — Nasdaq fell 5.28% to 22,617.73, erasing
   all its 2026 gains, after Reuters reported the SEC is reviewing Nvidia's
   accounting. Nvidia fell 14%; Anthropic 8.5% to $88.91.
5. **Trump threatens AI data-centre tax** — hefty taxes threatened on US firms
   building AI data centres overseas after an Asia summit. No details were given —
   a threat, not yet a policy.
6. **Mongolia's president resigns** — Parliament accepted President Khürelsükh's
   resignation, 96 of 104 present in favour. An early election follows within four
   months — a first for Mongolia.
7. **Myanmar rejects genocide ruling** — Myanmar rejected the ICJ's genocide ruling
   as "unfair". The court gave its judgment on 19 November; Myanmar's rejection
   came on 20 November.

Markets footer (close, 20 Nov): Nasdaq −5.28%, S&P 500 −3.70%, Dow −1.93%;
VIX +26.2% to 35.89. Gold ~$3,515.40/oz (−4.6%); Bitcoin ~$58,600 (−5.6%).
Brent $92.57 (+0.64%), WTI $83.98 (+0.93%).

## How it was made

- Hero photo: free illustration from [Pollinations](https://pollinations.ai)
  (flux model, seed `20261120`) — a Dnipro river bridge in Kyiv at dawn under
  air attack.
- All text is rendered in code (Python + PIL, DejaVu fonts) so it stays sharp;
  the output is a single 1024×1024 PNG.
- `main.ts` (Node 22, standard library only) copies `entry.png` to
  `$MAKEFUN_OUTPUT_DIR` (default `/output`). The copy is deterministic: every
  run produces byte-identical output.

## Run

```sh
node main.ts
# or, to choose the output directory:
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
