import type { CvData } from "@/types/cv";

const range = (count: number, mapper: (index: number) => string) =>
  Array.from({ length: count }, (_, i) => mapper(i + 1));

const L = {
  language: { en: "Language", vi: "Ngôn ngữ" },
  stateManagement: { en: "State Management", vi: "Quản lý state" },
  technologies: { en: "Technologies", vi: "Công nghệ" },
  localDatabase: { en: "Local Database", vi: "Cơ sở dữ liệu local" },
  googleStore: { en: "Google Store", vi: "Google Store" },
  appStore: { en: "App Store", vi: "App Store" },
  account: { en: "account", vi: "tài khoản" },
  password: { en: "password", vi: "mật khẩu" },
  domain: { en: "domain", vi: "domain" },
  teamLead: { en: "Team Lead", vi: "Trưởng nhóm" },
  pmDev: { en: "PM / Developer", vi: "Quản lý dự án / Lập trình viên" },
  developer: { en: "Developer", vi: "Lập trình viên" },
  leadDeveloper: { en: "Lead Developer", vi: "Trưởng nhóm mobile" },
  projectManager: { en: "Project Manager", vi: "Quản lý dự án" },
  mobileLead: { en: "Mobile Team Lead", vi: "Trưởng nhóm Mobile" },
};

export const cvData: CvData = {
  personal: {
    name: "Tien Le Duc",
    navName: {
      en: "Tien Le Duc",
      vi: "Lê Đức Tiến",
    },
    logo: "/images/logo.png",
    position: {
      en: "Senior Mobile Developer · Team Lead",
      vi: "Senior Mobile Developer · Team Lead",
    },
    avatar: "/images/avt_1.jpg",
    gender: { en: "Male", vi: "Nam" },
    maritalStatus: { en: "Single", vi: "Độc thân" },
    phone: "0389233253",
    email: "ldtien.tr@gmail.com",
    location: { en: "Ha Tinh, Vietnam", vi: "Hà Tĩnh, Việt Nam" },
    education: {
      en: "Information Technology Engineer - Vietnam National University, Hanoi",
      vi: "Kỹ sư công nghệ thông tin - Đại học Quốc gia Hà Nội",
    },
    summary: {
      en: `Lead Mobile Engineer with 12+ years of experience delivering mobile products across social networking, fintech, entertainment, communication, and enterprise domains.

Experienced in building and scaling mobile applications using iOS and Flutter, leading cross-functional teams, defining technical solutions, and driving product delivery from concept to production.

Strong background in real-time systems, chat platforms, VoIP, WebRTC, and large-scale mobile architectures. Passionate about solving business problems through technology while remaining hands-on in development and mentoring engineers.`,
      vi: `Kỹ sư Mobile Lead với hơn 12 năm kinh nghiệm xây dựng và phát triển các sản phẩm di động trong nhiều lĩnh vực như mạng xã hội, fintech, giải trí, truyền thông và doanh nghiệp.

Có kinh nghiệm trong việc xây dựng và mở rộng quy mô ứng dụng di động trên nền tảng iOS và Flutter, dẫn dắt các nhóm đa chức năng, định hướng giải pháp kỹ thuật và thúc đẩy quá trình phát triển sản phẩm từ giai đoạn ý tưởng đến khi đưa vào vận hành thực tế.

Sở hữu nền tảng vững chắc về hệ thống thời gian thực (real-time systems), nền tảng chat, VoIP, WebRTC và kiến trúc ứng dụng di động quy mô lớn. Đam mê giải quyết các bài toán kinh doanh bằng công nghệ, đồng thời luôn duy trì vai trò trực tiếp tham gia phát triển sản phẩm và cố vấn, đào tạo kỹ sư trong đội ngũ.`,
    },
    zaloUrl: "https://zalo.me/0389233253",
    heroBadge: {
      en: "Senior Mobile Developer",
      vi: "Senior Mobile Developer",
    },
    heroHeadline: {
      en: "Design solutions, build products,",
      vi: "Giải pháp thiết kế, xây dựng sản phẩm",
    },
    heroHighlight: {
      en: "and guide the development team.",
      vi: "và hướng dẫn đội ngũ phát triển.",
    },
    heroTags: {
      en: "iOS • Android • Flutter • Architecture • Realtime Systems",
      vi: "iOS • Android • Flutter • Kiến trúc • Hệ thống realtime",
    },
  },
  stats: [
    {
      value: "12+",
      label: { en: "Years Experience", vi: "Năm kinh nghiệm" },
    },
    {
      value: "30+",
      label: { en: "Mobile Products Delivered", vi: "Sản phẩm mobile triển khai" },
    },
    {
      value: "5+",
      label: { en: "Years Team Leadership", vi: "Năm lãnh đạo nhóm" },
    },
  ],
  skillBars: [
    {
      name: { en: "iOS (Swift / Objective-C)", vi: "iOS (Swift / Objective-C)" },
      level: 95,
    },
    {
      name: { en: "Flutter / Dart", vi: "Flutter / Dart" },
      level: 90,
    },
    {
      name: { en: "Android (Kotlin / Java)", vi: "Android (Kotlin / Java)" },
      level: 65,
    },
    {
      name: { en: "Team Leadership", vi: "Lãnh đạo nhóm" },
      level: 85,
    },
    {
      name: { en: "Mobile Architecture", vi: "Kiến trúc mobile" },
      level: 88,
    },
    {
      name: { en: "Backend (Node.js)", vi: "Backend (Node.js)" },
      level: 72,
    },
  ],
  languages: [
    {
      name: { en: "Vietnamese", vi: "Tiếng Việt" },
      level: { en: "Native", vi: "Bản ngữ" },
    },
    {
      name: { en: "English", vi: "Tiếng Anh" },
      level: { en: "Professional", vi: "Thành thạo công việc" },
    },
  ],
  valueCards: [],
  achievements: [
    {
      title: { en: "12+ Years Mobile", vi: "12+ năm Mobile" },
      description: {
        en: "Building iOS and cross-platform products since 2014.",
        vi: "Xây dựng sản phẩm iOS và đa nền tảng từ năm 2014.",
      },
    },
    {
      title: { en: "Reusable Chat SDK", vi: "Chat SDK tái sử dụng" },
      description: {
        en: "Built VTechChatSDK used across karaoke, social, and enterprise apps.",
        vi: "Xây dựng VTechChatSDK dùng chung cho karaoke, mạng xã hội và app doanh nghiệp.",
      },
    },
    {
      title: { en: "Enterprise Project", vi: "Dự án doanh nghiệp" },
      description: {
        en: "Built a cyclical stock tracking platform combining market trends with cycle signals — PM and lead developer from idea to store launch.",
        vi: "Xây dựng nền tảng theo dõi cổ phiếu theo chu kỳ, kết hợp xu hướng thị trường với tín hiệu chu kỳ — PM và lead developer từ ý tưởng đến phát hành trên các Store.",
      },
    },
    {
      title: { en: "Team Lead", vi: "Trưởng nhóm" },
      description: {
        en: "Led Flutter squads on BDS40, JobsVN, SingM, and AutoTelesale.",
        vi: "Dẫn dắt team Flutter cho BDS40, JobsVN, SingM và AutoTelesale.",
      },
    },
  ],
  experiences: [
    {
      from: "2026",
      to: "now",
      toNow: true,
      company: "Vinsmart Future",
      role: {
        en: "Solution Engineer & Developer",
        vi: "Kỹ sư giải pháp & Lập trình viên",
      },
      items: [
        {
          en: "Design and propose technical solutions for mobile products.",
          vi: "Xây dựng và đề xuất giải pháp kỹ thuật cho các sản phẩm mobile.",
        },
        {
          en: "Develop core components, especially chat and real-time communication systems.",
          vi: "Tham gia phát triển các thành phần cốt lõi, đặc biệt là hệ thống chat và giao tiếp thời gian thực.",
        },
        {
          en: "Resolve performance issues, memory leaks, and improve application stability.",
          vi: "Xử lý các vấn đề về hiệu năng, memory leak và tối ưu độ ổn định của ứng dụng.",
        },
        {
          en: "Enhance user experience through UI improvements and animations.",
          vi: "Nâng cao trải nghiệm người dùng thông qua cải tiến giao diện và animation.",
        },
        {
          en: "Provide technical support, code reviews, and mentor developers on the team.",
          vi: "Hỗ trợ kỹ thuật, review code và hướng dẫn các lập trình viên trong nhóm.",
        },
      ],
    },
    {
      from: "2024",
      to: "2026",
      company: "Freelance",
      role: {
        en: "Project Manager | Lead Developer | Developer",
        vi: "Quản lý dự án | Trưởng nhóm mobile | Lập trình viên",
      },
      items: [
        {
          en: "Delivered fintech, enterprise, and social networking applications for multiple clients.",
          vi: "Triển khai ứng dụng fintech, doanh nghiệp và mạng xã hội cho nhiều khách hàng.",
        },
        {
          en: "Led end-to-end development from requirement analysis and solution design to production deployment.",
          vi: "Dẫn dắt phát triển end-to-end từ phân tích yêu cầu, thiết kế giải pháp đến triển khai production.",
        },
        {
          en: "Worked directly with founders and business stakeholders to transform ideas into scalable products.",
          vi: "Làm việc trực tiếp với founder và stakeholder để biến ý tưởng thành sản phẩm có thể mở rộng quy mô.",
        },
        {
          en: "Built and maintained applications used by thousands of users across Vietnam and Southeast Asia.",
          vi: "Xây dựng và duy trì ứng dụng phục vụ hàng nghìn người dùng tại Việt Nam và Đông Nam Á.",
        },
        {
          en: "Key Projects:",
          vi: "Dự án tiêu biểu:",
        },
        {
          en: "StockBeat – Financial analytics and stock trading platform.",
          vi: "StockBeat – Nền tảng phân tích tài chính và giao dịch cổ phiếu.",
        },
        {
          en: "My THACO – Enterprise ecosystem application for THACO employees.",
          vi: "My THACO – Ứng dụng hệ sinh thái doanh nghiệp cho nhân viên THACO.",
        },
        {
          en: "Social Networking Platform – Real-time social platform for Malaysian market.",
          vi: "Social Networking Platform – Nền tảng social realtime cho thị trường Malaysia.",
        },
      ],
    },
    {
      from: "04/2018",
      to: "12/2023",
      company: "VTechnology",
      role: L.mobileLead,
      items: [
        {
          en: "Led the mobile team on Flutter apps including BDS40 (real estate), JobsVN (job social network), SingM (NFT / lifestyle), and AutoTelesale (CRM), covering architecture, delivery, and release.",
          vi: "Dẫn dắt team mobile trên các app Flutter: BDS40 (bất động sản), JobsVN (mạng xã hội việc làm), SingM (NFT / lifestyle) và AutoTelesale (CRM), từ kiến trúc đến phát hành.",
        },
        {
          en: "Shipped and maintained core iOS products such as LiveKara, Bói Tình Duyên, and Topiq, plus Topiq-Tool, an internal Swift-based support app for operations.",
          vi: "Triển khai và duy trì các sản phẩm iOS cốt lõi như LiveKara, Bói Tình Duyên, Topiq, cùng Topiq-Tool — app hỗ trợ vận hành viết bằng Swift.",
        },
        {
          en: "Built VTechChatSDK in Objective-C and reused it across live-streaming and social products to standardize chat, realtime messaging, and notifications.",
          vi: "Xây dựng VTechChatSDK bằng Objective-C và tái sử dụng trên các sản phẩm livestream và social để chuẩn hóa chat, messaging realtime và thông báo.",
        },
        {
          en: "Stepped into backend and game work when needed: Node.js services for Topiq and related titles (Caro, Chinese Chess, Pikachu), and TypeScript/Cocos2d-x client development for the Topiq game.",
          vi: "Đảm nhiệm backend và game khi cần: dịch vụ Node.js cho Topiq và các game liên quan (Caro, Cờ tướng, Pikachu), cùng client TypeScript/Cocos2d-x cho game Topiq.",
        },
      ],
    },
    {
      from: "2018",
      to: "04/2018",
      company: "VietMobi",
      role: L.mobileLead,
      items: [
        {
          en: "Led a small iOS team on Lịch vạn niên (Swift calendar app) and SweatCam (Objective-C photo editor), handling both implementation and technical direction.",
          vi: "Dẫn dắt team iOS nhỏ cho Lịch vạn niên (app lịch Swift) và SweatCam (chỉnh ảnh Objective-C), vừa code vừa định hướng kỹ thuật.",
        },
      ],
    },
    {
      from: "2016",
      to: "2018",
      company: "Savvycom",
      role: L.developer,
      items: [
        {
          en: "Delivered consumer iOS apps across education (MilkyChat), e-commerce (ShoppingApp), and F&B operations (CraveVend POS), working mainly in Swift with some Objective-C legacy code.",
          vi: "Triển khai app iOS cho giáo dục (MilkyChat), thương mại điện tử (ShoppingApp) và F&B (CraveVend POS), chủ yếu Swift kèm codebase Objective-C legacy.",
        },
      ],
    },
    {
      from: "2014",
      to: "2015",
      company: "Appota",
      role: L.developer,
      items: [
        {
          en: "Started my career on Objective-C apps in entertainment and content — aPhim, ComicVN, and onClan — then moved into platform work with AppVN and reusable SDKs for login, payments, and social features.",
          vi: "Bắt đầu sự nghiệp với app Objective-C giải trí và nội dung — aPhim, ComicVN, onClan — sau đó chuyển sang nền tảng AppVN và SDK tái sử dụng cho đăng nhập, thanh toán và social.",
        },
      ],
    },
  ],
  projects: [
    {
      id: "stockbeat",
      title: "StockBeat",
      featured: true,
      role: L.pmDev,
      description: {
        en: "StockBeat is a trading platform built around cyclical stock investing. Instead of chasing hype, it combines market trends with stock-cycle signals to surface entry and exit points that most automated tools still miss.",
        vi: "StockBeat là nền tảng giao dịch xây dựng trên nguyên tắc đầu tư cổ phiếu theo chu kỳ. Thay vì đu theo hype, nó kết hợp xu hướng thị trường với tín hiệu chu kỳ để gợi ý điểm vào/ra mà nhiều công cụ tự động còn bỏ sót.",
      },
      images: range(5, (i) => `/images/stb/${i}.png`),
      tech: [
        { label: L.language, values: ["Dart"] },
        { label: L.stateManagement, values: ["BLoC"] },
        {
          label: L.technologies,
          values: ["REST API", "Socket", "Firebase", "PJSIP"],
        },
        { label: L.localDatabase, values: ["Hive"] },
      ],
      links: [
        {
          label: L.googleStore,
          url: "https://play.google.com/store/apps/details?id=com.btm.stockbeat",
        },
      ],
      testAccounts: [
        { label: L.account, value: "0999888777" },
        { label: L.password, value: "123456" },
      ],
    },
    {
      id: "my-thaco",
      title: "My THACO",
      featured: true,
      role: L.developer,
      description: {
        en: "My THACO is the official mobile app for Truong Hai Group (THACO), built for employees across the group and its six member corporations. It keeps teams connected, surfaces company updates quickly, and supports everyday work inside a large industrial organization.",
        vi: "My THACO là ứng dụng chính thức của Tập đoàn Trường Hải (THACO), phục vụ nhân viên toàn tập đoàn và sáu công ty thành viên. Ứng dụng giúp kết nối nội bộ, cập nhật thông tin nhanh và hỗ trợ công việc hàng ngày.",
      },
      images: range(3, (i) => `/images/mtc/mtc_${i}.webp`),
      tech: [
        { label: L.language, values: ["Dart"] },
        { label: L.technologies, values: ["REST API", "Socket", "Firebase"] },
        { label: L.localDatabase, values: ["Hive"] },
      ],
      links: [
        {
          label: L.appStore,
          url: "https://apps.apple.com/vn/app/my-thaco/id1660844894",
        },
      ],
    },
    {
      id: "autotelesale",
      title: "Autotelesale",
      featured: true,
      role: L.teamLead,
      description: {
        en: "Autotelesale is a CRM platform that helps sales teams capture leads, follow up automatically, and turn prospects into repeat customers. Pipelines, outreach, and service promotion run in one place so reps spend less time on manual work.",
        vi: "Autotelesale là nền tảng CRM giúp đội kinh doanh thu lead, chăm sóc tự động và chuyển khách tiềm năng thành khách quen. Quy trình bán hàng, outreach và quảng bá dịch vụ gom về một nơi.",
      },
      images: range(9, (i) => `/images/ats/at_${i - 1}.png`),
      tech: [
        {
          label: L.language,
          values: ["Dart", "Objective-C", "Swift", "Kotlin", "C"],
        },
        { label: L.stateManagement, values: ["BLoC", "Provider"] },
        {
          label: L.technologies,
          values: ["REST API", "Socket", "PJSIP", "Firebase"],
        },
        { label: L.localDatabase, values: ["Hive"] },
      ],
      links: [
        {
          label: L.appStore,
          url: "https://apps.apple.com/vn/app/autotelesale-h%E1%BB%97-tr%E1%BB%A3-b%C3%A1n-h%C3%A0ng/id6453121486",
        },
      ],
      testAccounts: [
        { label: L.domain, value: "https://crm.autotelesale.com" },
        { label: L.account, value: "admin@gmail.com" },
        { label: L.password, value: "admin@779" },
      ],
    },
    {
      id: "topiq-client",
      title: "TopIQ (Client)",
      featured: true,
      role: L.developer,
      description: {
        en: "TopIQ is a brain-game app popular in Vietnam, mixing puzzles, classic mini-games, and cash-reward events for players who enjoy competitive thinking and community play.",
        vi: "TopIQ là app game trí tuệ phổ biến tại Việt Nam, kết hợp câu đố, mini-game kinh điển và sự kiện thưởng tiền mặt cho người chơi thích tư duy cạnh tranh.",
      },
      images: range(6, (i) => `/images/topiq/tq_${i - 1}.webp`),
      tech: [
        {
          label: L.language,
          values: ["Objective-C", "Swift", "Kotlin", "TypeScript"],
        },
        { label: L.technologies, values: ["REST API", "Socket", "Firebase"] },
        { label: L.localDatabase, values: ["SQLite"] },
      ],
      links: [
        {
          label: L.appStore,
          url: "https://apps.apple.com/vn/app/topiq-gi%E1%BA%A3i-th%C6%B0%E1%BB%9Fng-ti%E1%BB%81n-m%E1%BA%B7t/id1412605160",
        },
      ],
    },
    {
      id: "singn",
      title: "SingN (Sing To Earn)",
      description: {
        en: "SingN is a music game that blends social interaction with financial rewards around the \"Sing To Earn\" idea. Users turn a daily hobby into engagement on the platform while the product pushes a healthier, community-driven lifestyle.",
        vi: "SingN là game âm nhạc kết hợp tương tác xã hội và phần thưởng tài chính theo mô hình \"Sing To Earn\". Người dùng biến sở thích hát hàng ngày thành trải nghiệm trên nền tảng.",
      },
      images: range(6, (i) => `/images/sn/sn_${i}.png`),
      tech: [
        { label: L.language, values: ["Dart", "Java", "Objective-C"] },
        {
          label: L.technologies,
          values: ["REST API", "Socket", "Firebase", "FFMPEG", "Web3"],
        },
      ],
    },
    {
      id: "singm",
      title: "SingM",
      role: L.teamLead,
      description: {
        en: "SingM expands the Sing To Earn concept into a full musical social network. Beyond singing and rewards, users can share live or duet performances, chat, voice and video call, watch short videos, create NFT content, date, search songs by number or artist, publish MVs, and connect with creators across regions.",
        vi: "SingM mở rộng Sing To Earn thành mạng xã hội âm nhạc đầy đủ: hát live/duet, chat, gọi thoại/video, xem video ngắn, tạo NFT, hẹn hò, tìm bài theo số hoặc ca sĩ, đăng MV và kết nối creator.",
      },
      images: range(10, (i) => `/images/sm/sm_${i}.png`),
      tech: [
        { label: L.language, values: ["Dart", "Java", "Objective-C"] },
        {
          label: L.technologies,
          values: ["REST API", "Socket", "Firebase", "FFMPEG", "Web3"],
        },
      ],
    },
    {
      id: "jobsvn",
      title: "Job social network",
      role: L.teamLead,
      description: {
        en: "This job-focused social network pulls openings from recruitment sites and community groups into one feed. Employers can promote their brand and reach candidates beyond a single city, while job seekers discover roles, ask questions, and talk directly with hiring teams through posts, comments, and messages.",
        vi: "Mạng xã hội việc làm tổng hợp tin tuyển dụng từ website và group cộng đồng. Nhà tuyển dụng quảng bá thương hiệu, tiếp cận ứng viên đa khu vực; người tìm việc khám phá cơ hội và trao đổi trực tiếp qua bài viết, bình luận và tin nhắn.",
      },
      images: range(6, (i) => `/images/jsn/jsn_${i}.png`),
      tech: [
        { label: L.language, values: ["Dart"] },
        { label: L.stateManagement, values: ["BLoC", "Provider"] },
        { label: L.technologies, values: ["REST API", "Socket", "Firebase"] },
        { label: L.localDatabase, values: ["Hive"] },
      ],
    },
    {
      id: "bds40",
      title: "Batdongsan40",
      role: L.teamLead,
      description: {
        en: "Batdongsan40 helps users search real-estate listings across Vietnam, publish buy/sell/lease posts, and follow up with high-intent buyers. It also surfaces customer segments with strong purchasing power for agents and developers.",
        vi: "Batdongsan40 hỗ trợ tìm kiếm bất động sản toàn quốc, đăng tin mua/bán/thuê và theo dõi khách có nhu cầu cao. Cung cấp phân khúc khách hàng tiềm năng cho môi giới và chủ đầu tư.",
      },
      images: range(5, (i) => `/images/bds/bds_${i}.png`),
      tech: [
        { label: L.language, values: ["Dart"] },
        { label: L.stateManagement, values: ["BLoC", "Provider"] },
        { label: L.technologies, values: ["REST API", "Socket", "Firebase"] },
        { label: L.localDatabase, values: ["Hive"] },
      ],
    },
    {
      id: "vtech-chat-flutter",
      title: "VTechChatSDK (Flutter version)",
      description: {
        en: "A Flutter rewrite of the in-house chat SDK, packaged for reuse across Batdongsan40, Autotelesale, Job social network, and SingN with shared realtime messaging, REST integration, Firebase services, and local persistence.",
        vi: "Phiên bản Flutter của chat SDK nội bộ, tái sử dụng cho Batdongsan40, Autotelesale, Job social network và SingN với messaging realtime, REST, Firebase và lưu trữ local.",
      },
      images: [],
      tech: [
        { label: L.language, values: ["Dart"] },
        { label: L.technologies, values: ["REST API", "Socket", "Firebase"] },
        { label: L.localDatabase, values: ["Hive"] },
      ],
      integratedProjects: [
        "Batdongsan40",
        "Autotelesale",
        "Job social network",
        "SingN",
      ],
    },
    {
      id: "vtech-chat",
      title: "VTechChatSDK",
      description: {
        en: "The original Objective-C chat SDK powering LiveKara, My Kara, TopIQ, and Bói Tình Yêu. It centralizes messaging, sockets, Firebase, and SQLite storage so product teams could ship social features faster.",
        vi: "Chat SDK Objective-C gốc vận hành LiveKara, My Kara, TopIQ và Bói Tình Yêu. Tập trung messaging, socket, Firebase và SQLite để team sản phẩm ship tính năng social nhanh hơn.",
      },
      images: [],
      tech: [
        { label: L.language, values: ["Objective-C"] },
        { label: L.technologies, values: ["REST API", "Socket", "Firebase"] },
        { label: L.localDatabase, values: ["SQLite"] },
      ],
      links: [
        {
          label: { en: "Live kara", vi: "Live kara" },
          url: "https://apps.apple.com/vn/app/livekara-h%C3%A1t-karaoke/id1423466174",
        },
        {
          label: { en: "My kara", vi: "My kara" },
          url: "https://apps.apple.com/vn/app/h%C3%A1t-karaoke-vkara/id1582642801",
        },
        {
          label: { en: "TopIQ", vi: "TopIQ" },
          url: "https://apps.apple.com/vn/app/topiq-gi%E1%BA%A3i-th%C6%B0%E1%BB%9Fng-ti%E1%BB%81n-m%E1%BA%B7t/id1412605160",
        },
        {
          label: { en: "Bói tình yêu", vi: "Bói tình yêu" },
          url: "https://apps.apple.com/vn/app/b%C3%B3i-t%C3%ACnh-y%C3%AAu-k%E1%BA%BFt-n%E1%BB%91i-t%C3%A2m-h%E1%BB%93n/id1397365619",
        },
      ],
    },
    {
      id: "topiq-server",
      title: "TopIQ (Server)",
      description: {
        en: "Node.js backend for the TopIQ game suite, supporting Caro, Chinese Chess, Hidden Chess, Pikachu, and Who Wants to Be a Millionaire. Handles realtime multiplayer sessions, synchronized game state, cross-platform push notifications, and PostgreSQL-backed persistence.",
        vi: "Backend Node.js cho bộ game TopIQ: Caro, Cờ tướng, Cờ úp, Pikachu và Ai là triệu phú. Xử lý multiplayer realtime, đồng bộ trạng thái game, push notification đa nền tảng và PostgreSQL.",
      },
      images: [],
      tech: [{ label: L.language, values: ["Javascript", "TypeScript"] }],
    },
    {
      id: "boi-tinh-yeu",
      title: "Bói Tình Yêu",
      description: {
        en: "Bói Tình Yêu is a lighthearted compatibility app that estimates romantic chemistry from names, ages, and genders using astrology references and playful prediction models. Users can explore future-partner questions, compare people around them, and use most features offline.",
        vi: "Bói Tình Yêu là app giải trí ước lượng độ hợp tình duyên từ tên, tuổi và giới tính. Người dùng khám phá câu hỏi về người yêu tương lai, so sánh người xung quanh và dùng offline phần lớn tính năng.",
      },
      images: range(4, (i) => `/images/bty/bty_${i}.webp`),
      tech: [
        { label: L.language, values: ["Objective-C"] },
        { label: L.technologies, values: ["REST API", "Socket", "Firebase"] },
        { label: L.localDatabase, values: ["MagicalRecord"] },
      ],
      links: [
        {
          label: L.appStore,
          url: "https://apps.apple.com/vn/app/b%C3%B3i-t%C3%ACnh-y%C3%AAu-k%E1%BA%BFt-n%E1%BB%91i-t%C3%A2m-h%E1%BB%93n/id1397365619",
        },
      ],
    },
    {
      id: "milky-chat",
      title: "Milky.Chat",
      description: {
        en: "Milky.Chat connects preschools and parents in one channel. Teachers share daily attendance, meals, sleep, and hygiene updates with photos and notes; parents pay tuition online and message the school without switching apps.",
        vi: "Milky.Chat kết nối trường mầm non và phụ huynh. Giáo viên cập nhật điểm danh, bữa ăn, giấc ngủ, vệ sinh kèm ảnh; phụ huynh đóng học phí online và nhắn tin với trường trong một app.",
      },
      images: [
        "/images/milky/milky.jpeg",
        "/images/milky/1.webp",
        "/images/milky/2.webp",
      ],
      tech: [
        { label: L.language, values: ["Swift"] },
        { label: L.localDatabase, values: ["Realm"] },
      ],
    },
    {
      id: "crave",
      title: "Crave Vend, Crave Kiosk, Crave Fleet",
      description: {
        en: "Crave Vend, Crave Kiosk, and Crave Fleet form a POS ecosystem for F&B brands. Stores manage in-store and online orders from one menu, accept card/cash/e-wallet payments, sync inventory and staff data in the cloud, and plug into self-service kiosks, delivery fleets, and MercuryPay for checkout.",
        vi: "Crave Vend, Crave Kiosk và Crave Fleet tạo thành hệ sinh thái POS cho F&B. Quản lý đơn tại quán và online, thanh toán thẻ/tiền mặt/ví điện tử, đồng bộ menu và kho trên cloud, tích hợp kiosk tự phục vụ, giao hàng và MercuryPay.",
      },
      images: range(7, (i) => `/images/crv/crv_${i}.webp`),
      tech: [
        { label: L.language, values: ["Objective-C", "Java"] },
        { label: L.technologies, values: ["REST API", "Socket"] },
        { label: L.localDatabase, values: ["SQLite", "Core Data"] },
      ],
      links: [
        {
          label: L.appStore,
          url: "https://apps.apple.com/app/crave-vend-point-of-sale-pos/731295878",
        },
      ],
    },
  ],
};
