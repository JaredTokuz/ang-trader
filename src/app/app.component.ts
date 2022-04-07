import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  delay,
  map,
  Observable,
  of,
  Subject,
  tap,
} from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  outline_calendar,
  outline_cloud_upload,
  outline_cog,
  outline_home,
  outline_map,
  outline_searchCircle,
  outline_speakerphone,
  outline_userGroup,
  outline_viewGridAdd,
} from './icons';
import { HtmlSanitizer } from './string-html-sanitizer';
import { svg_store } from './icons';
interface NavElements {
  name: string;
  svg?: any;
}

// const defaultNav = 'Dashboard';

type Tier = 'S' | 'A' | 'B' | 'C' | 'D';
interface RecordCard {
  picture: string;
  name: string;
  description: string;
  tier: Tier;
}

type RecordCardOrganizer = {
  tier: Tier;
  data: Omit<RecordCard, 'tier'>[];
};

const exampleRecords: RecordCard[] = [
  {
    picture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Leslie Abbott',
    description: 'Co-Founder / CEO',
    tier: 'S',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Hector Adams',
    description: 'VP, Marketing',
    tier: 'S',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Blake Alexander',
    description: 'Account Coordinator',
    tier: 'S',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Fabricio Andrews',
    description: 'Senior Art Director',
    tier: 'S',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Angela Beaver',
    description: 'Chief Strategy Officer',
    tier: 'S',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Yvette Blanchard',
    description: 'Studio Artist',
    tier: 'S',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Lawrence Brooks',
    description: 'Content Specialist',
    tier: 'S',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Jeffrey Clark',
    description: 'Senior Art Director',
    tier: 'A',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Kathryn Cooper',
    description: 'Associate Creative Director',
    tier: 'A',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Alicia Edwards',
    description: 'Junior Copywriter',
    tier: 'A',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Benjamin Emerson',
    description: 'Director, Print Operations',
    tier: 'A',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Jillian Erics',
    description: 'Designer',
    tier: 'A',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Chelsea Evans',
    description: 'Human Resources Manager',
    tier: 'A',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Michael Gillard',
    description: 'Co-Founder / CTO',
    tier: 'B',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Dries Giuessepe',
    description: 'Manager, Business Relations',
    tier: 'B',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Jenny Harrison',
    description: 'Studio Artist',
    tier: 'B',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Lindsay Hatley',
    description: 'Front-end Developer',
    tier: 'B',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Anna Hill',
    description: 'Partner, Creative',
    tier: 'B',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Courtney Samuels',
    description: 'Designer',
    tier: 'C',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Tom Simpson',
    description: 'Director, Product Development',
    tier: 'C',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Floyd Thompson',
    description: 'Principal Designer',
    tier: 'C',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Leonard Timmons',
    description: 'Senior Designer',
    tier: 'C',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Whitney Trudeau',
    description: 'Copywriter',
    tier: 'C',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Kristin Watson',
    description: 'VP, Human Resources',
    tier: 'D',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Emily Wilson',
    description: 'VP, User Experience',
    tier: 'D',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Emma Young',
    description: 'Senior Front-end Developer',
    tier: 'D',
  },
];

const uploadCards: RecordCard[] = [
  {
    picture: '',
    name: 'Stocks',
    description: 'Nasdaq and NYSE',
    tier: 'S',
  },
];

type DetailTab = {
  id: string;
  data: string[];
};

const NavEnum = {
  Dashboard: '0',
};

const recordDetailTabs: { [key: string]: DetailTab } = {
  '0': {
    // Dashboard
    id: '0',
    data: ['Main', 'Profile', 'Calendar', 'Recognition'],
  },
};

type basicfunction = () => any;

type DetailButton = {
  id: string;
  name: string;
  svg: string | SafeHtml;
  action: basicfunction;
};

const recordDetailButtons: { [key: string]: DetailButton[] } = {
  '0': [
    {
      id: '0',
      name: 'Message',
      svg: svg_store['solid_mail'],
      action: () => null,
    },
    {
      id: '0',
      name: 'Call',
      svg: svg_store['solid_phone'],
      action: () => null,
    },
  ],
};

type Metric = {
  key: string;
  val: string | number;
};

const exampleDetailMetrics: Metric[] = [
  { key: 'Phone', val: '(555) 123-4567' },
  { key: 'Email', val: 'ricardocooper@example.com' },
  { key: 'Title', val: 'Senior Front-End Developer' },
  { key: 'Team', val: 'Product Development' },
  { key: 'Location', val: 'San Francisco' },
  { key: 'Sits', val: 'Oasis, 4th floor' },
  { key: 'Salary', val: '$145,000' },
  { key: 'Birthday', val: 'June 8, 1990' },
];

const nasdaq_screener_url =
  'https://www.nasdaq.com/market-activity/stocks/screener?exchange=';

const uploadDetailMetric: Metric[] = [
  { key: 'Nasdaq', val: nasdaq_screener_url + 'NASDAQ' },
  { key: 'NYSE', val: nasdaq_screener_url + 'NYSE' },
];

/** could evolve */
type RecordDetailDescription = {
  data: string;
};

const exampleDetailDescription: RecordDetailDescription[] = [
  {
    data: 'Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.',
  },
  {
    data: 'Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.',
  },
];

const uploadDetailDescription: RecordDetailDescription[] = [
  {
    data: 'Go to the urls and download the csv files for each exchange. Uploading the files to the server will filter out any insignificant stocks and update the database with the new stocks.',
  },
];

type RecordDetailCard = {
  picture: string | any;
  name: string;
  description: string;
  action: basicfunction;
};

const exampleRecordCards: RecordDetailCard[] = [
  {
    picture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Leslie Alexander',
    description: 'Co-Founder / CEO',
    action: () => null,
  },
  {
    picture:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Michael Foster',
    description: 'Co-Founder / CTO',
    action: () => null,
  },
  {
    picture:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Dries Vincent',
    description: 'Manager, Business Relations',
    action: () => null,
  },
  {
    picture:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Lindsay Walton',
    description: 'Front-end Developer',
    action: () => null,
  },
];

const exampleRecordDetail: { [key: string]: RecordDetail } = {
  Dashboard: {
    picture:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    name: 'Ricardo Cooper',
    tabs: recordDetailTabs['0'].data,
    buttons: recordDetailButtons['0'],
    chartInputs: {},
    metrics: exampleDetailMetrics,
    description: exampleDetailDescription,
    cards: exampleRecordCards,
  },
  Upload: {
    picture:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    name: 'Ricardo Cooper',
    tabs: recordDetailTabs['0'].data,
    buttons: recordDetailButtons['0'],
    chartInputs: {},
    metrics: uploadDetailMetric,
    description: uploadDetailDescription,
    cards: exampleRecordCards,
  },
};

type RecordDetail = {
  picture: string;
  name: string;
  tabs: string[];
  buttons: DetailButton[];
  chartInputs: any;
  metrics: Metric[];
  description: RecordDetailDescription[];
  cards: RecordDetailCard[];
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, HtmlSanitizer {
  title = 'angular-trader';

  // left most nav bar section
  appViews: NavElements[] = [
    { name: 'Dashboard', svg: this.trustHtml(outline_home) },
    { name: 'Upload', svg: this.trustHtml(outline_cloud_upload) },
    { name: 'Calendar', svg: this.trustHtml(outline_calendar) },
    { name: 'Teams', svg: this.trustHtml(outline_userGroup) },
    { name: 'Directory', svg: this.trustHtml(outline_searchCircle) },
    { name: 'Announcements', svg: this.trustHtml(outline_speakerphone) },
    { name: 'Office Map', svg: this.trustHtml(outline_map) },
  ];

  configViews: NavElements[] = [
    { name: 'Apps', svg: this.trustHtml(outline_viewGridAdd) },
    { name: 'Settings', svg: this.trustHtml(outline_cog) },
  ];

  navElementClasses = {
    normal: {
      bar: 'cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md',
      icon: 'text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6',
    },
    selected: {
      bar: 'cursor-pointer bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md',
      icon: 'text-gray-500 mr-3 flex-shrink-0 h-6 w-6',
    },
  };

  navSelected = 'Dashboard';

  /** user profile section */
  loggedInUser = 'Jared Tokuz';
  loggedInUserImg =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

  /** middle nav bar section */
  recordColumnDescription = 'Search directory of 3,018 employees';

  /** use a rxjs map to push each records fetched into the correct bin */
  recordColumnOrganizer = {
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
  };

  recordColumnClasses = [
    'hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200',
    'overflow-y-auto xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200',
  ];
  recordColumnUnhideButton = this.recordColumnClasses[1];
  toggleRecordColumnClass = classToggle(this.recordColumnClasses);
  toggleRecordColumn() {
    this.recordColumnUnhideButton = this.toggleRecordColumnClass();
  }

  /** cards section */
  cardListener = new BehaviorSubject<string>(this.navSelected);
  recordCards$ = this.cardListener.asObservable().pipe(
    map((navName) => {
      switch (navName) {
        case 'Dashboard':
          return exampleRecords;
        case 'Upload':
          return uploadCards;
        default:
          return exampleRecords;
      }
    }),
    map((data) => generateColumnOrganizer(data))
  );

  /** main detail section */
  mainListener = new BehaviorSubject<string>(this.navSelected);
  main$ = this.mainListener
    .asObservable()
    .pipe(map((navName) => this.sanitizeBridge(exampleRecordDetail[navName])));

  tabSelected = 'Main';

  detailTabClasses = {
    normal:
      'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
    selected:
      'cursor-pointer border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
  };

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {}

  sanitizeBridge: (data: RecordDetail) => RecordDetail = (data) => {
    const { buttons, ...rest } = data;
    return {
      ...rest,
      buttons: data.buttons.map((button) => {
        const { svg, ...rest } = button;
        return {
          ...rest,
          svg:
            typeof button.svg === 'string' ? this.trustHtml(button.svg) : svg,
        };
      }),
    };
  };

  trustHtml(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  isNavSelected({ name }: NavElements, type: 'bar' | 'icon') {
    return name === this.navSelected
      ? this.navElementClasses.selected[type]
      : this.navElementClasses.normal[type];
  }

  navSelect({ name }: NavElements) {
    this.navSelected = name;
    this.cardListener.next(name);
    this.mainListener.next(name);
  }

  navBarFlexState = 1;
  navBarCanvasState = 1;
  navBarTransition = classSelector(['-translate-x-full', 'translate-x-0']);
  navBarCloseButton = classSelector(['opacity-0', 'opacity-100']);
  setNavBarFlexState(index: number) {
    this.navBarFlexState = index;
    if (index == 0) {
      of(null)
        .pipe(
          delay(300),
          tap(() => (this.navBarCanvasState = index))
        )
        .subscribe();
    } else {
      this.navBarCanvasState = index;
    }
  }

  isTabSelected(name: string) {
    return name === this.tabSelected
      ? this.detailTabClasses.selected
      : this.detailTabClasses.normal;
  }

  // TODO change to observerable so that change detection works and the classes update properly
  tabSelect(name: string) {
    this.tabSelected = name;
  }
}

const generateColumnOrganizer = (data: RecordCard[]) => {
  const recordColumnOrganizer: RecordCardOrganizer[] = [
    { tier: 'S', data: [] },
    { tier: 'A', data: [] },
    { tier: 'B', data: [] },
    { tier: 'C', data: [] },
    { tier: 'D', data: [] },
  ];

  const recordEnum = {
    S: 0,
    A: 1,
    B: 2,
    C: 3,
    D: 4,
  };

  for (const { picture, name, description, tier } of data) {
    const val = {
      picture,
      name,
      description,
    };
    recordColumnOrganizer[recordEnum[tier]].data.push(val);
  }
  return recordColumnOrganizer;
};

export type classIndex = 0 | 1;
/** for switching between two classes */
export const classToggle = (classes: string[]) => {
  let index: classIndex = 0;
  return () => {
    if (index == 0) index = 1;
    else index = 0;
    return classes[index];
  };
};

export const classSelector = (classes: string[]) => {
  return (index: number) => {
    return classes[index];
  };
};
