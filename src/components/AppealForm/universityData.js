export const faculties = [
  {
    value: 'NNIZI',
    label: 'Навчально-науковий інститут захисту інформації',
  },
  {
    value: 'NNIIT',
    label: 'Навчально-науковий інститут Інформаційних технологій',
  },
  {
    value: 'NNIT',
    label: 'Навчально-науковий інститут Телекомунікацій',
  },
  {
    value: 'NNIMTP',
    label: 'Навчально-науковий інститут менеджменту та підприємництва',
  },
  {
    value: 'NNIZTDN',
    label: 'Навчально-науковий інститут заочного та дистанційного навчання',
  },
];

export const courses = [1, 2, 3, 4, 5, 6];

export const groupsByFacultyAndCourse = {
  NNIZI: {
    1: [
      'БСД-11',
      'БСД-12',
      'БСД-13',
      'БСД-14',
      'ПУД-11',
      'ПУД-12',
      'ПУД-13',
      'ПУД-14',
      'СЗД-11',
      'УБД-11',
      'УБД-12',
    ],
    2: [
      'БСД-21',
      'БСД-22',
      'БСД-23',
      'БСД-24',
      'ПУД-21',
      'СЗД-21',
      'УБД-21',
      'УБД-22',
    ],
    3: [
      'БСД-31',
      'БСД-32',
      'БСД-33',
      'БСД-34',
      'ПУД-31',
      'СЗД-31',
      'СЗД-32',
      'УБД-31',
      'УБД-32',
    ],
    4: ['БСД-41', 'БСД-42', 'БСД-43', 'ПУД-41', 'СЗД-41', 'УБД-41', 'УБД-42'],
    5: ['БСДМ-51', 'БСДМ-52', 'БСДМ-53', 'ПУДМ-51', 'СЗДМ-51', 'УБДМ-51'],
    6: [
      'БСДМ-61',
      'БСДМ-62',
      'БСДМ-63',
      'ПУДМ-61',
      'СЗДМ-61',
      'СЗДМ-62',
      'УБДМ-61',
    ],
  },
  NNIIT: {
    1: [
      'ТЦР-11',
      'ТЦР-12',
      'ТЦР-13',
      'ТЦР-14',
      'ШІД-11',
      'ШІД-12',
      'ШІД-13',
      'ІСД-12',
      'ІСД-14',
      'ПД-11',
      'ПД-12',
      'ПД-13',
      'ІСД-11',
      'ІСД-13',
      'ПД-14',
      'КІД-11',
      'КІД-12',
      'КНД-11',
      'КНД-12',
      'КНД-13',
      'КНД-14',
    ],
    2: [
      'ТЦР-21',
      'ТЦР-22',
      'ТЦР-23',
      'ТЦР-24',
      'ШІД-21',
      'ШІД-22',
      'ІСД-21',
      'ІСД-22',
      'ПД-21',
      'ПД-22',
      'ПД-23',
      'ПД-24',
      'КІД-21',
      'КІД-22',
      'КНД-21',
      'КНД-22',
      'КНД-23',
      'КНД-24',
    ],
    3: [
      'ШІД-31',
      'ШІД-32',
      'ПД-31',
      'ПД-32',
      'ПД-33',
      'ПД-34',
      'ІСД-31',
      'ІСД-32',
      'ІСД-33',
      'КІД-31',
      'КІД-32',
      'КНД-31',
      'КНД-32',
      'КНД-33',
    ],
    4: [
      'ШІД-41',
      'ПД-41',
      'ПД-42',
      'ПД-43',
      'ПД-44',
      'ІСД-41',
      'ІСД-42',
      'КІД-41',
      'КІД-42',
      'КНД-41',
      'КНД-42',
    ],
    5: [
      'КНДМ-51',
      'КНДМ-52',
      'КНДМ-53',
      'ІСДМ-51',
      'ІСДМ-52',
      'ІСДМ-53',
      'ІСДМ-54',
      'ПДМ-51',
      'ПДМ-52',
      'ПДМ-53',
      'КСДМ-51',
      'КСДМ-52',
    ],
    6: [
      'КНДМ-61',
      'КНДМ-62',
      'КНДМ-63',
      'ІСДМ-61',
      'ІСДМ-62',
      'ІСДМ-63',
      'ПДМ-61',
      'ПДМ-62',
      'ПДМ-63',
      'ПДМ-64',
      'КСДМ-61',
      'КСДМ-62',
    ],
  },
  NNIT: {
    1: [
      'САД-11',
      'САД-12',
      'ІТД-11',
      'ІТД-12',
      'ІТД-13',
      'РТД-11',
      'РТД-12',
      'РТД-13',
      'МТД-11',
      'МТД-12',
      'МТД-13',
      'МТД-14',
      'ТСД-11',
      'ТСД-12',
      'ТСД-13',
      'ТСД-14',
    ],
    2: ['САД-21', 'МТД-21', 'МТД-22', 'МТД-23', 'ТСД-21', 'ТСД-22', 'ТСД-23'],
    3: ['САД-31', 'МТД-31', 'МТД-32', 'ТСД-31', 'ТСД-32', 'ТСД-33'],
    4: ['САД-41', 'ТСД-43', 'ТСД-44', 'МТД-41', 'ТСД-41', 'ТСД-42'],
    5: [
      'АРДМ-51',
      'АРДМ-52',
      'АРДМ-53',
      'САДМ-51',
      'ТСДМ-51',
      'ТСДМ-52',
      'ТСДМ-53',
      'ТСДМ-54',
    ],
    6: [
      'АРДМ-61',
      'АРДМ-62',
      'САДМ-61',
      'ТСДМ-61',
      'ТСДМ-62',
      'ТСДМ-63',
      'ТСДМ-64',
    ],
  },
  NNIMTP: {
    1: [
      'АЗД-11',
      'АЗД-12',
      'ДЗД-11',
      'ЕПД-11',
      'ЕПД-12',
      'ЕПД-13',
      'МНД-11',
      'МНД-12',
      'МРД-11',
      'МРД-12',
      'ПТБ-11',
    ],
    2: [
      'АЗД-21',
      'АЗД-22',
      'ДЗД-21',
      'ЕПД-21',
      'МНД-21',
      'МНД-22',
      'МРД-21',
      'МРД-22',
      'ПТБ-21',
    ],
    3: ['АЗД-31', 'ДЗД-31', 'ЕПД-31', 'МНД-31', 'МРД-31', 'МРД-32', 'ПТБ-31'],
    4: [
      'АЗД-41',
      'ДЗД-41',
      'ЕПД-41',
      'МНД-41',
      'МНД-42',
      'МРД-41',
      'МРД-42',
      'ПТБ-41',
      'ПТБ-42',
    ],
    5: [
      'ДЗДМ-51',
      'ДЗДМ-52',
      'МРДМ-51',
      'ЕПДМ-51',
      'МНДМ-51',
      'ПТБМ-51',
      'УІДМ-51',
    ],
    6: [
      'ДЗДМ-61',
      'ДЗДМ-62',
      'МРДМ-61',
      'ЕПДМ-61',
      'МНДМ-61',
      'ПТБМ-61',
      'УІДМ-61',
    ],
  },
  NNIZTDN: {
    1: [],
    2: [],
    3: [],
    4: [
      'ППЗ-41',
      'ІСЗ-41',
      'ІАЗ-41',
      'КСЗ-41',
      'САЗ-41',
      'КНЗ-41',
      'МНЗ-41',
      'МРЗ-41',
      'ПТБЗ-41',
      'СЗЗ-41',
      'ТСЗ-41',
    ],
    5: [
      'ПУАЗ-51',
      'ППЗ-51',
      'ІСЗ-51',
      'ІАЗ-51',
      'БСЗ-51',
      'КСЗ-51',
      'САЗ-51',
      'КНЗ-51',
      'МНЗ-51',
      'МРЗ-51',
      'ПТБЗ-51',
      'ТСЗ-51',
      'УБЗ-51',
    ],
    6: [],
  },
};
