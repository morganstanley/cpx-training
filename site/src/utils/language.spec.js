import { getCurrentLanguage, getLanguage } from './language';
import { allExercises, slug, languages } from '../../__mocks__/exercises';

test('Gets documentation by version', () => {
  expect(getLanguage(allExercises, 'en-US')).toEqual([
    {
      id: '105d960d-43f9-5c51-9367-5f01020cec2c',
      tableOfContents: {
        items: [
          {
            url: '#learn',
            title: 'Learn',
            items: [
              {
                url: '#multi-week-programs',
                title: 'Multi-Week Programs',
                items: [
                  {
                    url: '#introduction-to-makecode',
                    title: 'Introduction to MakeCode',
                  },
                  {
                    url: '#introduction-to-circuitpython',
                    title: 'Introduction to CircuitPython',
                  },
                  {
                    url: '#robotics',
                    title: 'Robotics',
                  },
                ],
              },
              {
                url: '#single-day-programs',
                title: 'Single-Day Programs',
                items: [
                  {
                    url: '#intro-to-circuitpython---level-1',
                    title: 'Intro to CircuitPython - Level 1',
                  },
                  {
                    url: '#coding-with-circuitpython---level-2',
                    title: 'Coding with CircuitPython - Level 2',
                  },
                  {
                    url: '#imagicharm-lessons',
                    title: 'ImagiCharm Lessons',
                    items: [
                      {
                        url: '#colorful-pixels---level-1',
                        title: 'Colorful Pixels - Level 1',
                      },
                      {
                        url: '#moving-pixels---level-2',
                        title: 'Moving Pixels - Level 2',
                      },
                      {
                        url: '#rainbow-glow---level-3',
                        title: 'Rainbow Glow - Level 3',
                      },
                    ],
                  },
                ],
              },
              {
                url: '#get-started-today',
                title: 'Get Started Today!',
              },
            ],
          },
        ],
      },
      frontmatter: {
        template: null,
        title: 'Learn',
        tags: null,
        level: null,
        exercise: null,
        category: null,
        description: null,
      },
      internal: {
        contentFilePath:
          '/home/mimiflynn/Projects/cpx-training/site/content/exercises/en-US/index.mdx',
      },
      fields: {
        slug: '/exercises/en-US/',
      },
    },
  ]);

  expect(getLanguage(allExercises, 'en-US')).toEqual([
    {
      id: '13955014-01d7-5704-a740-96a897379a56',
      tableOfContents: {
        items: [
          {
            url: '#introduction-to-circuitpython---level-1',
            title: 'Introduction to CircuitPython - Level 1',
          },
          {
            url: '#programming-with-circuitpython---level-2',
            title: 'Programming with CircuitPython - Level 2',
          },
          {
            url: '#programming-with-circuitpython---robotics',
            title: 'Programming with CircuitPython - Robotics',
          },
        ],
      },
      frontmatter: {
        template: null,
        title: 'CircuitPython',
        tags: null,
        level: null,
        exercise: null,
        category: 'CircuitPython',
        description: null,
      },
      internal: {
        contentFilePath:
          '/home/mimiflynn/Projects/cpx-training/site/content/exercises/fr-CA/circuitpython/index.mdx',
      },
      fields: {
        slug: '/exercises/fr-CA/circuitpython/',
      },
    },
  ]);
});

test('Gets language of current exercise', () => {
  expect(getCurrentLanguage('/exercises/en-US/index.mdx', languages)).toEqual(
    'en-US'
  );
  expect(getCurrentLanguage('/exercises/fr-CA/index.mdx', languages)).toEqual(
    'fr-CA'
  );
  expect(
    getCurrentLanguage('/exercises/stuff/components/', [...versions, 'stuff'])
  ).toEqual('stuff');
  expect(
    getCurrentLanguage('/exercises/3.4.1-rc3/components/', [
      ...versions,
      '3.4.1-rc3',
    ])
  ).toEqual('3.4.1-rc3');
  expect(
    getCurrentLanguage('/exercises/3.4.1-rc3/components/', versions)
  ).toEqual(undefined);
});
