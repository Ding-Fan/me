const resources = {
  en: {
    translation: {
      resume: {
        label: {
          summary: 'Summary',
          skills: 'Skills',
          experience: 'Experience',
          abilities: 'Abilities',
          position: {
            title: 'Title: ',
            companyName: 'Company Name: ',
          },
          education: 'Education',
          university: {
            name: 'University: ',
            major: 'Major: ',
          },
          certifications: 'Certifications',
        },
        content: {
          name: 'Ding Fan',
          address: 'China, Hubei Province, Wuhan City',
          summary: 'Solve problems. Great at team working. Fast learner.',
          skills: [
            'have experience about JavaScript, TypeScript, CSS3, HTML5',
            'have experience about libraries and frameworks like  React, Vue, Nuxt, Redux, Vuex, axios, Element UI, Bootstrap, wepy(wechat miniapp), Node.js, AngularJS and so on',
            'have experience about tools like git, vim, SCSS, babel, parcel, webpack, gulp and so on',
            'have experience about databases like postgreSQL, mongoDB and so on',
            'Mac/Linux user',
          ],
          abilities: [
            'about "basic usage": use network resources like Google, Github and StackOverflow to find practical examples',
            'about "knowledge": have knowledge about front-end knowledge system, knows "How To Ask Questions The Smart Way", knows what to learn when questions founded',
            'about "soft skills": good communication skills, time-management skills, self-empowered'
          ],
          experience: [
            // {
            //   title: '',
            //   companyName: '',
            //   during: '',
            //   duty: [],
            // },
            {
              title: 'Web Developer, Lead of Front-end EngProd Team',
              companyName: 'Wuhan Nightingales Ltd.',
              during: 'March 2021 - now',
              duty: [
                'Mainly working on Weibanzhushou CRM(Customer Relationship Management) as a Web Developer',
                'Build templates, snippets, components and workflow for team use as the Lead of Front-end EngProd Team',
                'Help colleges resolve Linux(Ubuntu) related problems'
              ]
            },
            {
              title: 'Web Developer',
              companyName: 'Shenzhen Dankal',
              during: 'May 2018 - Mar 2019',
              duty: [
                'Mainly working on landing page, desktop/mobile e-commerce website, CMS(Content Management System), admin panel and wechat miniapp',
                'Develop new features and maintain codebase',
                'Build templates, snippets, components and tool chains for team use',
              ],
            },
            {
              title: 'Web Developer',
              companyName: 'Shanghai Zhipin',
              during: 'Jun 2016 - Jul 2017',
              duty: [
                'Mainly working on desktop e-commerce website, OA(Office Automation system) and admin panel',
                'Develop new features and maintain codebase',
              ],
            },
          ],
          education: {
            name: 'Jingchu University of Technology',
            major: 'Electrical Engineering and Automation',
            timeRange: '2012-2016',
          },
          certifications: {
            name: 'IELTS Academic Overall Band Score 7.0',
            time: 'Issued Dec 2019',
          },
        },
      },
    },
  },
  zh: {
    translation: {
      resume: {
        label: {
          summary: '描述',
          skills: '技能',
          experience: '经历',
          abilities: '能力',
          position: {
            title: '职位：',
            companyName: '公司：',
          },
          education: '教育',
          university: {
            name: '学校：',
            major: '专业：',
          },
          certifications: '证书',
        },
        content: {
          name: '范鼎',
          address: '中国湖北省武汉市',
          summary: '能解决问题，擅长团队合作，学习能力强',
          skills: [
            '掌握 JavaScript, TypeScript, CSS3, HTML5',
            '熟悉 React, Vue, Nuxt, Redux, Vuex, axios, Element UI, Bootstrap, wepy(微信小程序), Node.js, AngularJS 等库/框架',
            '熟悉 git, vim, SCSS, babel, parcel, webpack, gulp 等工具',
            '熟悉 postgreSQL, mongoDB 等数据库',
            'Mac/Linux 用户',
          ],
          abilities: [
            '关于“基本操作”：利用网络资源如 Google 、 Github 、 StackOverflow 查找实际案例',
            '关于“知识”：了解前端知识体系，知道“如何正确提问”，遇到问题知道该学什么',
            '关于“软技能”：良好的沟通能力，时间管理能力，自我驱动能力',
          ],
          experience: [
            // {
            //   title: '',
            //   companyName: '',
            //   during: '',
            //   duty: [],
            // },
            {
              title: '前端开发工程师，前端效能组组长',
              companyName: '武汉夜莺科技有限公司',
              during: '三月 2021 - 至今',
              duty: [
                '主要负责项目是微伴助手 CRM （客户资源管理）的功能开发与迭代',
                '构造公共模板、公共代码片段、公共组件及工作流供团队使用',
                '帮助同事解决 Linux(Ubuntu) 相关问题'
              ]
            },
            {
              title: '前端开发工程师',
              companyName: '深圳蛋壳创意科技有限公司',
              during: '五月 2018 - 三月 2019',
              duty: [
                '主要负责项目有官网、桌面端/移动端电商网站、 CMS （内容管理系统）、管理后台和微信小程序',
                '开发新功能并维护代码库',
                '构造公共模板、公共代码片段、公共组件及工具链供团队使用',
              ],
            },
            {
              title: '前端开发工程师',
              companyName: '上海知平信息技术有限公司',
              during: '六月 2016 - 七月 2017',
              duty: [
                '主要负责项目有官网、桌面端电商网站、 OA （办公自动化系统）和管理后台',
                '开发新功能并维护代码库',
              ],
            },
          ],
          education: {
            name: '荆楚理工学院',
            major: '电气工程及其自动化',
            timeRange: '2012-2016',
          },
          certifications: {
            name: '学术类雅思（IELTS Academic）总分 7.0',
            time: '获于 十二月 2019',
          },
        },
      },
    },
  },
}

export default resources
