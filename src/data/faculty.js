

const base = import.meta.env.BASE_URL
const photo = (f) => `${base}faculty/${f}.jpg`
const p = (file, name, degree, role) => ({ name, degree, role, photo: photo(file) })

export const groups = [
  {
    id: 'dean',
    eyebrow: 'Leadership',
    title: 'Dean',
    members: [p('quijano', 'Ma. Christina A. Quijano', 'MSCS', 'Dean')]
  },
  {
    id: 'heads',
    eyebrow: 'Teaching as a Way of Life',
    title: 'Department Heads and Coordinators',
    members: [
      p('dh1', 'Rea P. Balontong', 'MBA', 'Department Head (IT & IS)'),
      p('dh2', 'Marjee Rose B. Parreño', 'MSCS, MBA', 'Program Coordinator (BSCS, BSDMIA, and MSCS)'),
      p('dh3', 'Ana Mae B. Cantel', 'MLIS', 'Program Coordinator (BLIS and MLIS)'),
      p('dh4', 'Lennon D. Pajar', '', 'Computer Laboratory Coordinator')
    ]
  },
  {
    id: 'faculty',
    eyebrow: 'Teaching With A Smile',
    title: 'Faculty',
    members: [
      p('f1', 'Leo Paulo B. Beldia', '', 'BSIT and BSIS Program'),
      p('f2', 'Pedro Peter Rhys B. Cambronero', 'MSCS', 'BSCS Program'),
      p('f3', 'Lesley Joy L. Dignadice', 'MBA', 'BSIT and BSIS Program'),
      p('f4', 'Rodolfo C. Eregia, Jr.', '', 'BSIT and BSIS Program'),
      p('f5', 'Donie S. Jardeleza', 'MSCS', 'BSIT and BSIS Program'),
      p('f6', 'Antonio M. Montaño, Jr.', '', 'BSIT and BSIS Program'),
      p('f7', 'Rose Leah Joy A. Ojacastro', 'MSCS', 'BSIT and BSIS Program'),
      p('f8', 'Ma. Sheila C. Sapul', 'Ph.D.', 'BSCS Program')
    ]
  },
  {
    id: 'staff',
    eyebrow: 'Service and Teaching',
    title: 'Staff',
    members: [
      p('s1', 'Chrislyn C. Castaño', '', 'Secretary'),
      p('s2', 'A.M.P. Latter P. Taasan', '', 'Computer Laboratory Technician'),
      p('s3', 'Chriselda Elaine Ador', '', 'Guidance Counselor'),
      p('s4', 'Donna May Rivera', '', 'Library Liaison Officer')
    ]
  }
]