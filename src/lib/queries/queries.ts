//Header Menu data
export const menuQuery = `
{
   menuItems(where: { location: PRIMARY }, first: 45) {
     nodes {
       key: id
       parentId
       title: label
       url
       path
       description
       menuAcfFields {
         showMenuLabel
         menuLabelText
         showMegaMenu
         showServicesMegaMenu
         menuClasses
         menuIcon {
           mediaItemUrl
         }
       }
     }
   }
 }
`;

//Home Page Data
export const HomeQuery = `
query FetchHome($id: ID!) {
   page(id: $id, idType: URI) {
        id
        title
        HomePage {
          showSlider
          homeSlider {
            homeSliderImage {
              sourceUrl
            }
            homeSliderMiniText
            homeSliderTitle1
            homeSliderTitle2
            homeSliderDesc
            homeSliderBtn1Text
            homeSliderBtn1Url
            homeSliderBtn2Text
            homeSliderBtn2Url
            services1
            services2
            services3
            addVideo
            addVideoUrl
          }
          partnerLogo {
            partnerLogoImage {
              sourceUrl
            }
          }
          industriesSection {
            industryTitle
            industryId
            industryImage {
              mediaItemUrl
            }
          }
          testimonialsItems {
            testimonialsTitle
            testimonialsSub
            testimonialsDesc
          }
         homeBlogGroup {
        homeBlogSectionWide {
        ... on Post {
          id
          title
          excerpt
          uri
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          date
          categories(first: 1) {
            nodes {
              name
            }
          }
        }
      }
        homeBlogSectionSmall {
        ... on Post {
          id
          title
          excerpt
          uri
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          date
          categories(first: 1) {
            nodes {
              name
            }
          }
        }
      }
      }
        }
      }
    }`;

//All Post Query
export const AllPostQuery = `
    query BlogQuery {
      contentNodes(where: { contentTypes: POST }, first: 1) {
        edges {
          node {
            ... on Post {
              id
              title
              excerpt
              slug
              date
              author {
                node {
                  name
                  avatar {
                    url
                  }
                }
              }
              categories {
                nodes {
                  name
                }
              }
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }

      posts {
        nodes {
          title
          excerpt
          slug
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;

//Single Post Query
export const SinglePostQuery = `
query PostQuery($id: ID!) {
  post(id: $id, idType: URI) {
      id
      title
      excerpt
      content
      date
      PageUnderConstructionStatus {
        pageUnderConstruction
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
        }
      }
      singleBlogFields {
        customTextBox1
      }

  }
}
`;

//Services Page Query
export const PageQuery = `
query PostQuery($id: ID!) {
  page(id: $id, idType: URI) {
        __typename
        id
        title
        excerpt
        PageUnderConstructionStatus {
            pageUnderConstruction
          }
          checkPage {
            checkPageField
            addPageField
          }
        ServicesAcfFields {
            serviceTitle1
            serviceSpecialTitleText
            serviceText1
            boxesItemsX3 {
              boxesItemsImage {
                uri
              }
              boxesItemsTitle
              boxesItemsDesc
            }
            serviceSmallTitle2
            serviceTitle2
            serviceText2
            overviewSection {
              overviewSectionTitle
              overviewSectionDesc
            }
            fourthSectionImage {
              mediaItemUrl
            }
            fourthSectionSmallTitle
            fourthSectionMainTitle
            fourthSectionSpecialTitle
            fourthSectionDesc
            fourthSectionList {
              listText
            }
            fifthSectionSmallTitle
            fifthSectionMainTitle
            fifthSectionListItems {
              icon {
                mediaItemUrl
              }
              title
              listText
            }
        }

          children {
            nodes {
              ... on Page {
                id
                title
                excerpt
                uri
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
}
    }
}`;

//About Us Page Data
export const AboutUsQuery = `
  query PostQuery($id: ID!) {
   page(id: $id, idType: URI) {
          id
          title
          excerpt
          aboutUsAcf {
            timelineSmallTitle
            timelineTitle
            timelineDetails
            timelineListItems {
              timelineDateYear
              timelineItemHeading
              timelineItemDetail
             timelineItemContent
            }
          }
          PageUnderConstructionStatus {
            pageUnderConstruction
          }
      }
    }
  `;

//Solutions Data
export const SolutionsQuery = `
  query PostQuery($id: ID!) {
  solution(id: $id, idType: URI) {
          id
          title
          excerpt
          PageUnderConstructionStatus {
            pageUnderConstruction
          }
          solutions_field {
            showSolutionVideo
            solutionVideo
            showSolution2Content
            solutionContent2Title
            solutionContent2TitleCursive
            solutionContent2SubTitle
            solutionContent2Text {
              listText1
              listText2
            }
            solutionContent2Image {
              mediaItemUrl
            }
          }

      }
    }
  `;

//Careers Data
export const CareersQuery = `
  query PostQuery($id: ID!) {
   page(id: $id, idType: URI) {
     title
     excerpt
     CareersPageFields {
      smallTitle
      title
      textFields {
        text1
        text2
      }
      careersSlider {
      image {
        mediaItemUrl
      }
      text
    }
    }
    }
}`;

//Single Case Study Data
export const SingleJobPostQuery = `
query PostQuery($id: ID!) {
  career(id: $id, idType: URI) {
    title
    excerpt

  }
}
`;

export const AllJobsQuery = `
query PostQuery {
  careers {
    nodes {
      title
      uri
    }
  }
}`;

//Case Studies Data
export const CaseStudiesQuery = `
query PostQuery
{
    caseStudies
    {
        nodes {
            title
            uri
            slug
            excerpt
        featuredImage {
            node {
            mediaItemUrl
                }
            }
        }
    }
}`;

//CaseStudy By Industry
export const CaseStudyByIndistry = `
  query PostQuery($slug: [String]) {
    industries(where: {slug: $slug}) {
      edges {
        node {
          caseStudies {
            nodes {
              title
            }
          }
        }
      }
    }
  }`;

//Single Case Study Data
export const SingleCaseStudyQuery = `
query PostQuery($id: ID!) {
  caseStudy(id: $id, idType: URI) {
    title
    excerpt
    casestudy_fields {
      caseStudy3xBox {
        icon {
          mediaItemUrl
        }
        title
        text
      }
      aboutTheDomainText
      businessChallengesImage {
      mediaItemUrl
    }
    businessChallengesMinititle
    businessChallengesTitle
    businessChallengesSubtitle
    businessChallengesTitleText
       businessSolutionsImage {
      mediaItemUrl
    }
    businessSolutionsMinititle
    businessSolutionsTitle
    businessSolutionsSubtitle
    businessSolutionsTitleText
        businessResultsImage {
      mediaItemUrl
    }
    businessResultsMinititle
    businessResultsTitle
    businessResultsSubtitle
    businessResultsTitleText
    }
  }
}
`;
