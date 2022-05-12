// This module should contain all functions related with books
// For now, it only contains the list of books

export interface Book {
  id: number;
  title: string;
  authors: string[];
  image: string;
  rating: number;
  category: string;
  numberrating: number;
}

export interface AuthorBook {
  author_id: number;
  book_id: number;
}

export const books = [
  {
    id: 1,
    title: "Ubik",
    authors: ["Philip K. Dick"],
    image: "https://covers.openlibrary.org/b/id/9251896-L.jpg",
    rating: 4,
    category: "Sci-Fi",
    numberrating: 300,
  },
  {
    id: 2,
    title: "Do Androids dream of electric sheep?",
    authors: ["Philip K. Dick"],
    image: "https://covers.openlibrary.org/b/id/11153217-L.jpg",
    rating: 5,
    category: "Sci-Fi",
    numberrating: 255,
  },
  {
    id: 3,
    title: "The Man in The High Castle",
    authors: ["Philip K. Dick"],
    image: "https://covers.openlibrary.org/b/id/10045188-L.jpg",
    rating: 5,
    category: "Sci-Fi",
    numberrating: 120,
  },
  {
    id: 4,
    title: "Minority Report and other tales",
    authors: ["Philip K. Dick"],
    image: "https://covers.openlibrary.org/b/id/911202-L.jpg",
    rating: 3,
    category: "Sci-Fi",
    numberrating: 450,
  },
  {
    id: 5,
    title: "Dune",
    authors: ["Frank Herbert"],
    image: "https://covers.openlibrary.org/b/id/911202-L.jpg",
    rating: 4,
    category: "Sci-Fi",
    numberrating: 450,
  },
  {
    id: 6,
    title: "Der Seewolf",
    authors: ["Jack London"],
    image: "https://covers.openlibrary.org/b/id/11383463-L.jpg",
    rating: 4,
    category: "Novel",
    numberrating: 5,
  },
  {
    id: 7,
    title: "A girl of the Limberlost",
    authors: ["Gene Stratton-Porter"],
    image: "https://covers.openlibrary.org/b/id/6617388-L.jpg",
    rating: 3,
    category: "Novel",
    numberrating: 3,
  },
  {
    id: 8,
    title: "Physics",
    authors: ["Joseph W. Kane", "Morton M. Sternheim"],
    image: "https://covers.openlibrary.org/b/id/7152529-L.jpg",
    rating: 3,
    category: "Non-fiction",
    numberrating: 2,
  },
  {
    id: 9,
    title: "Rich Dad, Poor Dad",
    authors: ["Robert T. Kiyosaki", "Sharon L. Lechter"],
    image: "https://covers.openlibrary.org/b/id/12489935-L.jpg",
    rating: 3,
    category: "Non-fiction",
    numberrating: 3,
  },

  {
    id: 10,
    title: "This is Going to Hurt",
    authors: ["Adam Kay"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509858637.jpg",
    rating: 3,
    category: "Biography",
    numberrating: 325,
  },

  {
    id: 11,
    title: "Thinking, Fast and Slow",
    authors: ["Daniel Kahneman"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1410/9780141033570.jpg",
    rating: 2,
    category: "Non-fiction",
    numberrating: 251,
  },
  {
    id: 12,
    title: "When Breath Becomes Air",
    authors: ["Paul Kalanithi"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7847/9781784701994.jpg",
    rating: 3,
    category: "Biography",
    numberrating: 826,
  },
  {
    id: 13,
    title: "The Happiness Trap",
    authors: ["Russ Harris"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8452/9781845298258.jpg",
    rating: 4,
    category: "Other",
    numberrating: 669,
  },
  {
    id: 14,
    title: "Man's Search For Meaning",
    authors: ["Viktor E. Frankl"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8460/9781846041242.jpg",
    rating: 1,
    category: "Biography",
    numberrating: 410,
  },
  {
    id: 15,
    title: "The Man Who Mistook His Wife for a Hat",
    authors: ["Oliver Sacks"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3305/9780330523622.jpg",
    rating: 3,
    category: "Other",
    numberrating: 32,
  },
  {
    id: 16,
    title: "The 8-week Blood Sugar Diet",
    authors: ["Michael Mosley"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7807/9781780722405.jpg",
    rating: 2,
    category: "Diet book",
    numberrating: 121,
  },
  {
    id: 17,
    title: "The Clever Guts Diet",
    authors: ["Michael Mosley"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7807/9781780723044.jpg",
    rating: 1,
    category: "Diet book",
    numberrating: 34,
  },
  {
    id: 18,
    title: "12 Rules for Life",
    authors: ["Jordan B. Peterson"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2413/9780241351642.jpg",
    rating: 3,
    category: "Other",
    numberrating: 92,
  },
  {
    id: 19,
    title: "Being Mortal",
    authors: ["Atul Gawande"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8466/9781846685828.jpg",
    rating: 1,
    category: "Other",
    numberrating: 605,
  },
  {
    id: 20,
    title: "Gut",
    authors: ["Giulia Enders"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/9252/9781925228601.jpg",
    rating: 1,
    category: "Other",
    numberrating: 886,
  },
  {
    id: 21,
    title: "The Brain That Changes Itself",
    authors: ["Norman Doidge"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1410/9780141038872.jpg",
    rating: 1,
    category: "Non-fiction",
    numberrating: 867,
  },
  {
    id: 22,
    title: "Medical Medium Liver Rescue",
    authors: ["Anthony William"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4019/9781401954406.jpg",
    rating: 1,
    category: "Other",
    numberrating: 367,
  },
  {
    id: 23,
    title: "Wreck This Journal",
    authors: ["Keri Smith"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1419/9780141976143.jpg",
    rating: 4,
    category: "Other",
    numberrating: 113,
  },
  {
    id: 24,
    title: "Harry Potter and the Prisoner of Azkaban",
    authors: ["J. K. Rowling"],
    image: "https://covers.openlibrary.org/b/id/11416615-L.jpg",
    rating: 4,
    category: "Novel",
    numberrating: 658,
  },
  {
    id: 25,
    title: "Diagnostic and Statistical Manual of Mental Disorders (DSM-5)",
    authors: ["American Psychiatric Association"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/8904/9780890425558.jpg",
    rating: 2,
    category: "Other",
    numberrating: 760,
  },
  {
    id: 26,
    title: "Gut and Psychology Syndrome",
    authors: ["Dr Natasha Campbell-McBride"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/9548/9780954852023.jpg",
    rating: 1,
    category: "Other",
    numberrating: 232,
  },
  {
    id: 27,
    title: "Medical Medium Thyroid Healing",
    authors: ["Anthony William"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4019/9781401948368.jpg",
    rating: 2,
    category: "Other",
    numberrating: 650,
  },
  {
    id: 28,
    title: "Steal Like an Artist",
    authors: ["Austin Kleon"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/7611/9780761169253.jpg",
    rating: 2,
    category: "Other",
    numberrating: 43,
  },
  {
    id: 29,
    title: "Sitting Still Like A Frog",
    authors: ["Eline Snel"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6118/9781611800586.jpg",
    rating: 1,
    category: "Other",
    numberrating: 468,
  },
  {
    id: 30,
    title: "How Not To Die",
    authors: ["Michael Greger"],
    image:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509852505.jpg",
    rating: 4,
    category: "Diet book",
    numberrating: 787,
  },
];
