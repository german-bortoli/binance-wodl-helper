import data from '../../data/glossary.json'

export const filterData = (count: number) => {
  const all: Record<string, string> = {}

  Object.values(data).forEach((d) => d.map(a => {
    const title = a.title.replace(/[^a-z0-9 -]/gi, '').toLowerCase()

    if (title.length === count) {
      all[title] = title
    }

    const moreWords = title.split(' ').filter(d => d.length === count)

    moreWords.forEach((mw) => all[mw] = mw)
  }))

  return Object.values(all)
}