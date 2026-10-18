export type CommunityAssessmentSection = {
  heading: string;
  content: string;
};


export type SearchAction =
  | { type: 'region'; value: string }
  | { type: 'learning'; value: string }
  | { type: 'journey'; value: string }
  | { type: 'team'; value: string };

export type SearchItem = {
  label: string;
  detail: string;
  category: string;
  target: string;
  action?: SearchAction;
};

export const navigationItems = [
  { label: 'Home', target: 'home', path: '/' },
  { label: 'Community Assessment', target: 'community-assessment', path: '/community-assessment' },
  { label: 'Learning Objective', target: 'learning-objectives', path: '/learning-objectives' },
  { label: 'Project Journey', target: 'project-journey', path: '/project-journey' },
  { label: 'Team', target: 'team', path: '/team' },
] as const;

export const assessmentRegions = [
 {
  id: 'oke-lade',
  name: 'Oke Lade',
  mapContext: 'Oke Lade is one of the regions in Shao, Moro Local Government Area, Kwara State, that our group was assigned to for the COBES community mapping exercise. The aim was to move round the area and observe the living conditions, available amenities and problems residents in that part of Shao are dealing with. The population is a mix of Christians, Muslims and traditionalists, though Christians appear to be the majority. We did not come across any mosque during the walk, but the First Evangelical Church Winning All (ECWA), Shao stands out as a major landmark. Rock outcrops surround several of the houses, and the large rock formation that Shao is generally known for can be seen from within Oke Lade as well.',
  focus: 'Household and community-health context',
  detail: 'Most of the houses in Oke Lade are built with mud/earth, with a smaller number built with cement blocks. Buildings are packed fairly close together, and it is common to find a house built right beside or around a large rock, since the rocks are part of the natural landscape here.',

  assessment: [
    {
      heading: 'ROAD NETWORK AND TRANSPORTATION',
      content: 'There is one major tarred road running through the community, which most residents rely on for movement. Several smaller roads branch from the major road and remain untarred red-earth roads, making them more difficult to use during the rainy season. The major road meets the central part of the town at a T-junction, dividing the community into three areas, and it also leads to Oke-Ere. Most residents use motorcycles for transportation, while a smaller number use cars.',
    },
    {
      heading: 'HOUSING AND SETTLEMENT PATTERN',
      content: 'Most houses in Oke Lade are constructed with mud or earth, while a smaller number are built with cement blocks. Buildings are relatively close together, and it is common to find houses built beside or around large rocks because the rocky terrain forms part of the natural landscape.',
    },
    {
      heading: 'WATER SUPPLY',
      content: 'Residents obtain water mainly from boreholes and wells within the community, while some households also collect and use rainwater. The boreholes have tanks mounted on raised metal stands for storing pumped water before distribution to residents. Access to water did not appear to be a major problem; however, the safety of some water sources, particularly rainwater, may be affected by the sanitation conditions observed in the community.',
    },
    {
      heading: 'SANITATION AND WASTE MANAGEMENT',
      content: 'Sanitation was the most prominent concern observed in Oke Lade. Most houses do not have toilets, resulting in widespread open defecation. There is also no organized waste collection system, and refuse is commonly dumped in open spaces around the community. These practices may contaminate water sources and increase the risk of communicable and faecal-oral diseases.',
    },
    {
      heading: 'HEALTH FACILITIES',
      content: 'A clinic attached to First ECWA Shao was identified within the community. It is a missionary or mission clinic operated by the church to provide basic health services to residents. Its presence gives residents some access to healthcare without travelling far, although the mapping exercise did not provide sufficient information to assess its staffing, equipment or utilization.',
    },
    {
      heading: 'ELECTRICITY AND OTHER INFRASTRUCTURE',
      content: 'Electricity infrastructure was observed in Oke Lade, including electricity poles, transmission lines and a transformer installation along the road. A signboard at the transformer indicated that it was installed by Moro Local Government as part of a project to supply electricity to Shao Township.',
    },
    {
      heading: 'NATURAL AND ENVIRONMENTAL FEATURES',
      content: 'Oke Lade is characterized by rocky terrain, red lateritic soil and patches of greenery. The large rock formation associated with Shao is visible from several points within the community and contributes to its distinctive physical appearance.',
    },
    {
      heading: 'COMMUNITY RESOURCES IDENTIFIED',
      content: 'The community resources identified during the mapping exercise included a major tarred road, the First ECWA Shao mission clinic, boreholes and wells, rainwater as an additional water source, electricity and transformer infrastructure, First ECWA Shao as a major religious landmark, and the surrounding rock formations and natural environment.',
    },
    {
      heading: 'HEALTH AND ENVIRONMENTAL CHALLENGES',
      content: 'The major challenges observed in Oke Lade include the lack of toilets and widespread open defecation, the absence of an organized waste disposal system, poor accessibility of some untarred connecting roads during the rainy season, possible contamination of well, borehole and rainwater sources due to poor sanitation, and the resulting increased risk of communicable and faecal-oral diseases.',
    },
    {
      heading: 'RECOMMENDATIONS',
      content: 'Households should be encouraged and supported to construct and use sanitary toilets, while an organized system for waste collection and disposal should be developed. Health education should focus on sanitation, personal hygiene and safe water practices, including the proper collection and handling of rainwater. Boreholes and wells should be protected from contamination and water quality should be monitored regularly. There is also a need to advocate for improvement of untarred roads leading into the community and to support the mission clinic with additional resources so that it can better serve residents.',
    },
    {
      heading: 'CONCLUSION',
      content: 'Overall, the mapping exercise carried out in Oke Lade, Shao, on August 4, 2026, provided a clearer picture of living conditions in the area. The community has useful resources, including a tarred road, electricity, water sources and a mission clinic. However, sanitation, particularly the lack of toilets and proper waste disposal, remains the most prominent health challenge observed. Addressing these problems will require cooperation among residents, community leaders and relevant authorities.',
    },
  ],
},
 
{
  id: 'ode-alawon',
  name: 'Ode Alawon',
  mapContext: 'Ode Alawon is a clustered settlement in Shao, Moro Local Government Area, Kwara State, characterized predominantly by clay houses and a relatively sparse natural environment. A mosque and a shrine were identified within the community, while no church was observed. The community has open spaces and an abandoned school building. The Alawon of Ode Alawon serves as the traditional leader of the community. The community also has a traditional activity involving the production of orunla, while the annual Shao Awonga festival, usually held around November, includes activities such as a mass wedding.',
  focus: 'Settlement, sanitation and community-health context',
  detail: 'Most houses in Ode Alawon are constructed with clay and are closely packed together, giving the community a generally clustered settlement pattern. Several abandoned or incomplete structures were also observed, including an abandoned school, two houses under construction and two demolished buildings.',

  assessment: [
    {
      heading: 'ROAD NETWORK AND TRANSPORTATION',
      content: 'The roads within Ode Alawon are predominantly untarred, but they were reported to remain accessible during the rainy season. Movement is highest mainly in the morning, while movement is relatively low in the afternoon. The mapping notes did not provide further details about the specific means of transportation used by residents.',
    },
    {
      heading: 'HOUSING AND SETTLEMENT PATTERN',
      content: 'The community consists predominantly of clay houses that are closely packed together. The settlement pattern is generally clustered. Several abandoned or incomplete structures were observed, including one abandoned school, two houses under construction and two demolished buildings.',
    },
    {
      heading: 'WATER SUPPLY',
      content: 'A functional borehole was identified at the entrance of the community, and approximately six public water taps were observed. A few wells were also identified and could serve as alternative sources of water during power outages when water cannot be pumped. The available information does not provide details on the quality or safety of these water sources.',
    },
    {
      heading: 'SANITATION AND WASTE MANAGEMENT',
      content: 'Sanitation conditions in Ode Alawon present several concerns. Open defecation is practised, while waste is mainly disposed of on a nearby hill. Some open sewage was also observed, and animal waste, particularly goat droppings, was present in parts of the community. Although one refuse dump was observed, it was closed at the time of assessment. Poor drainage was also noted. These conditions may contribute to environmental contamination and increase public health risks.',
    },
    {
      heading: 'HEALTH FACILITIES',
      content: 'Only one patent medicine store was observed in the community. Accessibility to the facility was described as very easy; however, no patients were present during the visit. The facility was not fully operational and was reported to be in poor condition, while its operating hours could not be clearly determined.',
    },
    {
      heading: 'ELECTRICITY AND OTHER INFRASTRUCTURE',
      content: 'The mapping notes did not provide specific information on electricity supply or other major utility infrastructure in Ode Alawon. An abandoned school building and several incomplete or demolished structures were, however, observed within the community.',
    },
    {
      heading: 'NATURAL AND ENVIRONMENTAL FEATURES',
      content: 'The community has sparse vegetation, with mostly weeds around the mountainous areas, and no dense bush was observed. There are open spaces within the settlement. The area was not identified as flood-prone, and no stagnant water or mosquito breeding sites were observed during the visit. Smoke pollution was noted because of the use of firewood for cooking, while poor drainage and open sewage were also observed.',
    },
    {
      heading: 'COMMUNITY RESOURCES IDENTIFIED',
      content: 'The community resources identified during the mapping exercise included a functional borehole, approximately six public water taps, a few wells, a patent medicine store, a mosque, a shrine, open spaces, the traditional leadership of the Alawon of Ode Alawon, and the annual Shao Awonga cultural festival.',
    },
    {
      heading: 'HEALTH AND ENVIRONMENTAL CHALLENGES',
      content: 'The major challenges identified in Ode Alawon include open defecation, disposal of waste on a nearby hill, poor drainage, open sewage, animal waste within the environment, smoke pollution from firewood use, poor housing ventilation, and the poor condition and limited operation of the patent medicine store. The absence of a school, market and church within the community was also noted.',
    },
    {
      heading: 'RECOMMENDATIONS',
      content: 'There is a need to promote improved sanitation practices, particularly the construction and use of household toilets and proper disposal of refuse and sewage. Health education should address personal hygiene, environmental sanitation, safe water use and the health risks associated with smoke exposure. The patent medicine store should be encouraged to operate appropriately and maintain acceptable conditions, while community leaders and relevant authorities should consider improving drainage and other basic infrastructure.',
    },
    {
      heading: 'CONCLUSION',
      content: 'The mapping exercise showed that Ode Alawon has important community resources, including accessible water sources, religious and traditional institutions, open spaces and a patent medicine outlet. However, sanitation, waste disposal, poor drainage, inadequate housing ventilation and limited healthcare access remain important concerns. Addressing these issues through community participation and support from relevant authorities would improve environmental and public health conditions.',
    },
  ],
},

{
  id: 'oju-oja',
  name: 'Oju Oja',
  mapContext: 'Oju Oja serves as a major commercial hub in Shao and was identified as the primary mapping region and main market area. Several markets and commercial activities are present, although the market was barely operational at the time of the assessment. The area is characterized by rocky terrain and predominantly sandy soil, with approximately half of the terrain described as rocky. A Muslim community school providing primary and secondary education was identified together with a central mosque. A police station, an event centre and several cemeteries were also observed.',
  focus: 'Commercial, environmental and community-health context',
  detail: 'Oju Oja is characterized by a combination of commercial activity, residential areas and rocky terrain. The roads are mostly untarred, sandy and dusty, while many pathways are made up largely of rocks. Residential buildings are generally separated by open spaces, although some houses are close together and may have inadequate ventilation.',

  assessment: [
    {
      heading: 'ROAD NETWORK AND TRANSPORTATION',
      content: 'The road network in Oju Oja is generally poor, with most roads being untarred, sandy and dusty. Movement within the community can be difficult because of the rocky terrain, with many pathways consisting largely of rocks rather than accessible roads. The mapping notes did not provide specific information on the predominant means of transportation.',
    },
    {
      heading: 'HOUSING AND SETTLEMENT PATTERN',
      content: 'Residential buildings are generally separated by open spaces, allowing relatively good ventilation and accessibility. However, the buildings are not properly organized and no clear town-planning structure was observed. Some houses are built close to one another, which may contribute to inadequate ventilation and increase the risk of airborne disease transmission.',
    },
    {
      heading: 'WATER SUPPLY',
      content: 'Wells are the primary source of water in Oju Oja, while only a few households use motorized or manual boreholes. Residents also collect rainwater during the rainy season as an additional source. The mapping notes did not provide specific information on the quality of these water sources.',
    },
    {
      heading: 'SANITATION AND WASTE MANAGEMENT',
      content: 'Sanitation conditions are poor in Oju Oja. The rocky terrain makes it difficult for residents to construct soakaway pits, creating challenges for proper sewage disposal. Open defecation is practised, and the community dumping site is also used for waste and faecal disposal. Most households lack bathroom facilities, leading some residents to bathe very early in the morning using makeshift shade structures. Poor refuse and sewage disposal therefore constitute significant public health concerns.',
    },
    {
      heading: 'HEALTH FACILITIES',
      content: 'The mapping notes provided information on the school, mosque, police station and event centre but did not identify a specific healthcare facility within the Oju Oja mapping area.',
    },
    {
      heading: 'ELECTRICITY AND OTHER INFRASTRUCTURE',
      content: 'A school, central mosque, police station, event centre and market facilities were identified within Oju Oja. The mapping notes did not provide specific information on electricity supply or transformer infrastructure.',
    },
    {
      heading: 'NATURAL AND ENVIRONMENTAL FEATURES',
      content: 'The community is characterized by sandy soil and extensive rocky terrain, with limited bushy vegetation. Stagnant water lodges were observed and may serve as mosquito breeding sites. Air pollution was also observed from the burning of waste materials and the use of charcoal for cooking, exposing residents to smoke and particulate matter.',
    },
    {
      heading: 'COMMUNITY RESOURCES IDENTIFIED',
      content: 'Community resources identified during the mapping exercise include Oju Oja market and other commercial areas, a Muslim community school offering primary and secondary education, a central mosque, a police station, an event centre, open spaces, wells and a limited number of boreholes.',
    },
    {
      heading: 'HEALTH AND ENVIRONMENTAL CHALLENGES',
      content: 'The major challenges in Oju Oja include poor road conditions, inadequate drainage, susceptibility to flooding and gully erosion, poor waste and sewage disposal, open defecation, inadequate bathroom facilities, stagnant water that may support mosquito breeding, air pollution from waste burning and charcoal use, and limited access to protected water sources.',
    },
    {
      heading: 'RECOMMENDATIONS',
      content: 'Community sanitation should be strengthened through improved waste and sewage disposal practices and increased access to sanitary toilet and bathroom facilities. Drainage channels should be improved to reduce stagnant water, flooding and erosion. Health education should emphasize malaria prevention, environmental sanitation, safe water practices and the health risks associated with smoke exposure. Improvement of roads and access to essential community services should also be considered.',
    },
    {
      heading: 'CONCLUSION',
      content: 'The mapping exercise showed that Oju Oja has important commercial, educational, religious and security resources but faces substantial environmental and public health challenges. Poor sanitation, inadequate drainage, difficult terrain, limited protected water sources, stagnant water and air pollution require attention through coordinated community and institutional interventions.',
    },
  ],
},

{
  id: 'ogidi',
  name: 'Ogidi',
  mapContext: 'Ogidi is a mountainous region of Shao Community characterized by closely packed residential buildings, predominantly mud houses and a significant elderly population. The community falls under the traditional authority of the King, Oba Atolabe of Shao. The youth leader is Olarewaju Alaba, known as the Okojun of the community and described as a philanthropist. Social organization includes youth and elderly groups and a small cooperative group for women. There is no town hall in the community.',
  focus: 'Healthcare access, sanitation and traditional community-health context',
  detail: 'Most houses in Ogidi are constructed with mud and are closely packed together. The mountainous terrain includes notable hills known as Oke Olonkoro and Oke Ganga. The environment was described as generally cold, while the community relies mainly on a borehole for water supply.',

  assessment: [
    {
      heading: 'ROAD NETWORK AND TRANSPORTATION',
      content: 'The mapping notes did not provide detailed information on the condition of the road network or the main means of transportation in Ogidi. However, the absence of a motor park was specifically noted.',
    },
    {
      heading: 'HOUSING AND SETTLEMENT PATTERN',
      content: 'Housing in Ogidi is closely packed, and most houses are constructed with mud. The area is mountainous, with notable hills known as Oke Olonkoro and Oke Ganga. Ventilation was described as generally cold.',
    },
    {
      heading: 'WATER SUPPLY',
      content: 'Water supply in Ogidi is mainly obtained from a borehole. No streams or rivers are located within the community, although rivers are present in neighbouring regions. The mapping notes did not provide further information on the quality or reliability of the borehole.',
    },
    {
      heading: 'SANITATION AND WASTE MANAGEMENT',
      content: 'The community has no proper waste management system, and no toilets were available. Bathroom facilities were reported to be in poor condition. These conditions create important sanitation challenges and may increase the risk of environmental contamination and sanitation-related diseases.',
    },
    {
      heading: 'HEALTH FACILITIES',
      content: 'No primary healthcare facility was identified in Ogidi. Residents reportedly rely on herbs for treatment, while two chemist shops serve the community. Self-medication is also very common. Traditional medical practice is widespread and includes separate practices for infants and pregnant women and a general practice for other residents.',
    },
    {
      heading: 'ELECTRICITY AND OTHER INFRASTRUCTURE',
      content: 'Electricity supply was described as stable. However, the community has no town hall, motor park or school. Social groups for youths, elderly residents and women provide some form of community organization.',
    },
    {
      heading: 'NATURAL AND ENVIRONMENTAL FEATURES',
      content: 'Ogidi is a mountainous area with notable hills and no streams or rivers within the immediate community. The settlement is characterized by closely packed houses and a cold environment. Poor waste management and the absence of toilets constitute important environmental concerns.',
    },
    {
      heading: 'COMMUNITY RESOURCES IDENTIFIED',
      content: 'Community resources include a borehole, two chemist shops, traditional healthcare practices, youth and elderly groups, a womenâ€™s cooperative group, stable electricity supply and traditional leadership structures.',
    },
    {
      heading: 'HEALTH AND ENVIRONMENTAL CHALLENGES',
      content: 'Key challenges include the absence of a primary healthcare facility, high reliance on herbs and self-medication, inadequate sanitation, lack of toilets, poor bathroom facilities, absence of a school, lack of a town hall and motor park, and generally poor living standards.',
    },
    {
      heading: 'RECOMMENDATIONS',
      content: 'There is a need to improve access to primary healthcare services and strengthen community health education on appropriate healthcare-seeking behaviour, the risks of self-medication and the safe use of traditional remedies. Sanitation should be improved through the provision and use of toilets and better bathroom facilities, while an organized waste management system should be established. Efforts to strengthen social and community infrastructure should also be encouraged.',
    },
    {
      heading: 'CONCLUSION',
      content: 'Ogidi has a strong traditional and social structure, stable electricity and access to a borehole and chemist shops. Nevertheless, the absence of primary healthcare services, poor sanitation, high reliance on self-medication and herbs, lack of educational facilities and generally poor living conditions present significant public health concerns. These findings should guide subsequent community health education and intervention activities.',
    },
  ],
},

{
  id: 'isale-oja',
  name: 'Isale Oja',
  mapContext: 'Isale Oja is a developed section of Shao containing residential areas alongside religious centres, schools, healthcare facilities, recreational spaces and other community structures. Important landmarks identified during the mapping exercise include Moro LGA School, Shao, Shao Junior Secondary School, the Moro Nut Cooperative Secretariat, a Primary Health Care Centre, a recreational area, three mosques, five churches, the Ajifowo Herbal Temple, a shrine and a chemist or patent medicine outlet.',
  focus: 'Healthcare, infrastructure and environmental-health context',
  detail: 'Isale Oja contains a relatively wide range of community institutions and services, including schools, religious centres, a Primary Health Care Centre, commercial health outlets and water sources. However, poor sanitation, drainage problems, stagnant water and poorly ventilated houses remain important environmental health concerns.',

  assessment: [
    {
      heading: 'ROAD NETWORK AND TRANSPORTATION',
      content: 'The mapping notes did not provide detailed information about the road network or the predominant means of transportation in Isale Oja. However, poor drainage was observed in parts of the community, which may affect movement during periods of heavy rainfall.',
    },
    {
      heading: 'HOUSING AND SETTLEMENT PATTERN',
      content: 'The community consists mainly of residential areas interspersed with open spaces and other community facilities. The mapping notes specifically identified poorly ventilated houses as an environmental health concern, although detailed information about the construction materials and settlement pattern was not provided.',
    },
    {
      heading: 'WATER SUPPLY',
      content: 'Five boreholes and four wells were identified within Isale Oja. These constitute important sources of water for residents. However, the mapping exercise identified sanitation and waste-disposal problems that may affect environmental water safety.',
    },
    {
      heading: 'SANITATION AND WASTE MANAGEMENT',
      content: 'Poor sanitation and poor waste disposal were identified as important environmental challenges in Isale Oja. Open defecation was also observed. These conditions, together with stagnant water and inadequate drainage, may contribute to environmental contamination and increase the risk of water-related and vector-borne diseases.',
    },
    {
      heading: 'HEALTH FACILITIES',
      content: 'A Primary Health Care Centre was identified within Isale Oja, providing residents with access to primary healthcare services. A chemist or patent medicine outlet was also identified and provides access to medicines and basic healthcare-related products. Traditional or alternative health resources include the Ajifowo Herbal Temple and a shrine or traditional religious setting.',
    },
    {
      heading: 'ELECTRICITY AND OTHER INFRASTRUCTURE',
      content: 'The community contains several important institutions and public structures, including schools, the Moro Nut Cooperative Secretariat, a recreational area, religious centres and the Primary Health Care Centre. The mapping notes did not provide specific information on electricity supply.',
    },
    {
      heading: 'NATURAL AND ENVIRONMENTAL FEATURES',
      content: 'Environmental concerns include poor drainage, stagnant water, waterlogging and locations that may be prone to flooding during heavy rainfall. These conditions can create mosquito breeding sites and increase the risk of malaria and other water-related diseases.',
    },
    {
      heading: 'COMMUNITY RESOURCES IDENTIFIED',
      content: 'Important community resources include five boreholes, four wells, a Primary Health Care Centre, a chemist or patent medicine outlet, Moro LGA School, Shao Junior Secondary School, the Moro Nut Cooperative Secretariat, a recreational area, three mosques, five churches, the Ajifowo Herbal Temple and a shrine.',
    },
    {
      heading: 'HEALTH AND ENVIRONMENTAL CHALLENGES',
      content: 'The major environmental health challenges include stagnant water, waterlogging, mosquito breeding, flooding during heavy rainfall, poor waste disposal, poor sanitation, open defecation, poorly ventilated houses and stagnant water around residential areas. These conditions may increase the risk of water-related diseases and malaria.',
    },
    {
      heading: 'RECOMMENDATIONS',
      content: 'The community should strengthen waste management and sanitation practices, with emphasis on reducing open defecation and improving household and environmental hygiene. Drainage channels should be improved to reduce waterlogging and stagnant water. Regular environmental sanitation and malaria prevention activities should be encouraged. The Primary Health Care Centre and available laboratory services should also be supported to improve access to preventive, diagnostic and basic healthcare services.',
    },
    {
      heading: 'CONCLUSION',
      content: 'Isale Oja has relatively extensive community resources, including schools, religious institutions, a Primary Health Care Centre, water sources and commercial health outlets. However, poor sanitation, waste disposal, inadequate drainage, stagnant water, flooding and open defecation remain important public health concerns. Addressing these environmental risks alongside strengthening existing health services would improve community health outcomes.',
    },
  ],
},

{
  id: 'oke-seniga',
  name: 'Oke Sinniga',
  mapContext: 'Oke Sinniga is a culturally and religiously diverse community in Shao comprising Muslims, Christians and traditional worshippers. During the mapping exercise, no mosque or church was identified within the community, although one traditional shrine was observed. The assessment considered the social, religious, environmental, occupational, linguistic and water-supply characteristics of the community.',
  focus: 'Water, sanitation and community-health context',
  detail: 'Oke Sinniga has limited protected water sources, with one major community well serving more than 400 residents and one borehole providing an additional source. The community also has surrounding hills that are used for open defecation, while small-scale livelihood activities such as tailoring, hairdressing and trading were identified.',

  assessment: [
    {
      heading: 'ROAD NETWORK AND TRANSPORTATION',
      content: 'The mapping notes did not provide specific information on the road network or predominant means of transportation in Oke Sinniga.',
    },
    {
      heading: 'HOUSING AND SETTLEMENT PATTERN',
      content: 'The mapping exercise did not provide detailed information on housing materials or the general settlement pattern in Oke Sinniga.',
    },
    {
      heading: 'WATER SUPPLY',
      content: 'Water sources in Oke Sinniga are limited. A major community well serves more than 400 residents, while one borehole provides an additional source of water. The community well was observed to be largely open and covered with a wooden cover, which may allow contaminants and environmental debris to enter the water and compromise its safety. The reliance on one major well and a single borehole indicates limited access to protected water sources.',
    },
    {
      heading: 'SANITATION AND WASTE MANAGEMENT',
      content: 'Open dumping is commonly practised in Oke Sinniga, with refuse disposed of in open spaces. Open defecation was also observed, particularly on the surrounding hills. These practices may contribute to environmental pollution and increase the risk of sanitation-related and waterborne diseases.',
    },
    {
      heading: 'HEALTH FACILITIES',
      content: 'The mapping notes did not identify a healthcare facility within Oke Sinniga. Consequently, the available information does not provide sufficient detail on local healthcare services or their utilization.',
    },
    {
      heading: 'ELECTRICITY AND OTHER INFRASTRUCTURE',
      content: 'The mapping notes did not provide specific information about electricity supply or major infrastructure in Oke Sinniga.',
    },
    {
      heading: 'NATURAL AND ENVIRONMENTAL FEATURES',
      content: 'The community has surrounding hills that are used for open defecation. The unsafe condition of the major community well, together with open dumping and limited protected water sources, represents an important environmental health concern.',
    },
    {
      heading: 'COMMUNITY RESOURCES IDENTIFIED',
      content: 'Community resources identified include a major community well serving more than 400 residents, one borehole, a traditional shrine, and small-scale livelihood activities such as tailoring, hairdressing and trading. Yoruba is the predominant language spoken by residents.',
    },
    {
      heading: 'HEALTH AND ENVIRONMENTAL CHALLENGES',
      content: 'The main health and environmental challenges include inadequate access to protected water sources, the unsafe condition of the major community well, open dumping, open defecation and the associated risks of environmental pollution, water contamination and sanitation-related diseases.',
    },
    {
      heading: 'RECOMMENDATIONS',
      content: 'The community well should be properly protected and maintained to reduce the risk of contamination, while additional protected water sources should be considered. Health education should emphasize safe water handling, personal hygiene, proper waste disposal and the prevention of open defecation. Community health interventions should be communicated in Yoruba where appropriate to improve understanding, participation and acceptance.',
    },
    {
      heading: 'CONCLUSION',
      content: 'The mapping exercise revealed that Oke Sinniga has important livelihood activities and a culturally diverse population but faces notable water and sanitation challenges. The unsafe condition of the major community well, limited protected water sources, open dumping and open defecation are key concerns that should be addressed through community participation and appropriate public health interventions.',
    },
  ],
},

{
  id: 'oke-iboo',
  name: 'Oke Iboo',
  mapContext: 'Oke Iboo is a semi-urban settlement in Shao with several social, religious, educational and transportation landmarks that serve as important reference points for residents. Three churches were identified, namely the 3rd ECWA Church, Seventh-day Adventist Church and The Apostolic Church. Two mosques, Ibadur-Rahman Jumat Mosque and Elemosho Amá»na Mosque, were also identified. Other landmarks include Oloye Ibooâ€™s House, the NURTW Shao Garage and two major bus stops. Educational facilities include SDA/LGEA Primary School and ECWA Secondary School.',
  focus: 'Environmental, healthcare-access and community-health context',
  detail: 'Oke Iboo contains important religious, educational and transportation facilities, including three churches, two mosques, two schools, the NURTW Shao Garage and two major bus stops. However, environmental concerns such as indiscriminate waste disposal, inadequate drainage, stagnant water and overgrown bushes were observed around some residential areas.',

  assessment: [
    {
      heading: 'ROAD NETWORK AND TRANSPORTATION',
      content: 'Transportation in Oke Iboo is supported by the NURTW Shao Garage and two major bus stops, which facilitate movement within and outside the community. The mapping notes did not provide a detailed assessment of road conditions.',
    },
    {
      heading: 'HOUSING AND SETTLEMENT PATTERN',
      content: 'The mapping notes did not provide detailed information on housing materials or the overall settlement pattern in Oke Iboo. However, overgrown bushes and stagnant water around some residential areas were observed.',
    },
    {
      heading: 'WATER SUPPLY',
      content: 'The mapping notes did not provide specific information on the number or types of water sources available in Oke Iboo. However, stagnant water was observed in some areas, particularly around inadequate drainage systems.',
    },
    {
      heading: 'SANITATION AND WASTE MANAGEMENT',
      content: 'The community faces sanitation challenges due to improper waste disposal practices among some residents. Waste is sometimes discarded indiscriminately, contributing to environmental pollution and potentially creating breeding sites for disease vectors. Inadequate drainage leads to the accumulation of stagnant water, especially during and after rainfall.',
    },
    {
      heading: 'HEALTH FACILITIES',
      content: 'No healthcare facility was identified within Oke Iboo during the mapping exercise. Residents may therefore need to travel outside the community to obtain healthcare services. This may delay timely diagnosis and treatment, particularly during emergencies, and may limit access to preventive services such as health education, immunization, screening and health promotion.',
    },
    {
      heading: 'ELECTRICITY AND OTHER INFRASTRUCTURE',
      content: 'Important infrastructure in Oke Iboo includes religious institutions, two schools, the NURTW Shao Garage and two major bus stops. These facilities support education, worship and transportation within and outside the community. The mapping notes did not provide specific information on electricity supply.',
    },
    {
      heading: 'NATURAL AND ENVIRONMENTAL FEATURES',
      content: 'Environmental challenges observed in Oke Iboo include overgrown bushes, inadequate drainage and stagnant water. These conditions may negatively affect environmental cleanliness and safety and may provide breeding or hiding sites for mosquitoes and other disease vectors.',
    },
    {
      heading: 'COMMUNITY RESOURCES IDENTIFIED',
      content: 'Community resources include three churches, two mosques, two educational institutions, Oloye Ibooâ€™s House as a community landmark, the NURTW Shao Garage and two major bus stops. These facilities support religious activities, education, transportation and community interaction.',
    },
    {
      heading: 'HEALTH AND ENVIRONMENTAL CHALLENGES',
      content: 'The main challenges identified include indiscriminate waste disposal, inadequate drainage, stagnant water, overgrown bushes, absence of a healthcare facility and absence of laboratory services. Some community members also reported that some children have a commonly occurring type of skin rash, although the cause was not determined during the mapping exercise.',
    },
    {
      heading: 'RECOMMENDATIONS',
      content: 'Improved waste management and regular environmental sanitation should be encouraged to reduce indiscriminate disposal and environmental pollution. Drainage systems should be improved to reduce stagnant water and mosquito breeding. Community health education should address personal hygiene, skin care, malaria prevention and communicable disease prevention. Access to primary healthcare and laboratory services should also be improved so that residents can obtain timely diagnosis, treatment and preventive services.',
    },
    {
      heading: 'CONCLUSION',
      content: 'Oke Iboo has important social, religious, educational and transportation resources, but the community faces significant environmental, sanitation, healthcare-access and laboratory-service challenges. Improving sanitation and drainage while strengthening access to healthcare and diagnostic services would contribute to better health outcomes in the community.',
    },
  ],
},
] as const;

export const learningExperiences = [
  {
    id: 'community-discovery',
    title: 'Discovering Shao together',
    tag: 'Community fieldwork',
    image: '/cobes-data/shao-imgs/shao-village.jpg',
    description: 'We explored the community in small groups, listened to residents, and learned how local places and daily routines shape health.',
    outcome: 'A stronger understanding of Shao through respectful community engagement.',
    gallery: [
      { src: '/cobes-data/shao-imgs/shao-village.jpg', alt: 'A view across Shao community', caption: 'Getting to know the community' },
      { src: '/cobes-data/shao-imgs/shaonova-img.jpg', alt: 'Shaonova students in laboratory coats', caption: 'Learning and working as a team' },
      { src: '/cobes-data/shao-imgs/shao-mls-outreach.jpg', alt: 'Students speaking with community members during outreach', caption: 'Learning through conversation' },
    ],
  },
  {
    id: 'community-mapping',
    title: 'Mapping the community',
    tag: 'Community fieldwork',
    image: '/cobes-data/shao-imgs/Shao-map.png',
    description: 'We walked through assigned areas, noted landmarks and services, and brought our observations together on a community map.',
    outcome: 'A shared picture of community resources, routes, and needs.',
    gallery: [
      { src: '/cobes-data/shao-imgs/Shao-map.png', alt: 'Map prepared for the Shao community assessment', caption: 'Putting the field observations on a map' },
      { src: '/cobes-data/shao-imgs/shao-village.jpg', alt: 'A view across Shao community', caption: 'Exploring local routes and landmarks' },
      { src: '/cobes-data/shao-imgs/shaonova-img.jpg', alt: 'Shaonova students gathered in laboratory coats', caption: 'Comparing notes as a team' },
    ],
  },
  {
    id: 'health-outreach',
    title: 'Health outreach and education',
    tag: 'Community fieldwork',
    image: '/cobes-data/shao-imgs/shao-mls-outreach.jpg',
    description: 'We shared practical health information, engaged with residents, and connected classroom learning with community needs.',
    outcome: 'Health education shaped by what we learned in the community.',
    gallery: [
      { src: '/cobes-data/shao-imgs/shao-mls-outreach.jpg', alt: 'Students taking part in community health outreach in Shao', caption: 'Taking part in community outreach' },
      { src: '/cobes-data/shao-imgs/shaonova-img.jpg', alt: 'Shaonova students in laboratory coats', caption: 'Working together in the field' },
      { src: '/cobes-data/shao-imgs/shao-village.jpg', alt: 'A view across Shao community', caption: 'Learning in the community setting' },
    ],
  },
] as const;

export const journeyStages = [
  {
    id: 'community-entry',
    title: 'Community entry',
    label: 'Arrival',
    image: '/cobes-data/shao-imgs/shao-village.jpg',
    imageAlt: 'View of Shao, the community where the fieldwork took place',
    approach: 'The team coordinated its arrival and accommodation, confirmed the posting schedule, and prepared materials for community engagement. This gave the students a shared base and allowed the work to begin with a clear plan for respectful participation.',
    detail: 'The Shaonova team arrived in Shao, settled into the lodge, and prepared for a purposeful stay in the community.',
  },
  {
    id: 'community-introduction',
    title: 'Community introduction',
    label: 'Foundation',
    image: '/cobes-data/shao-imgs/shaonova-img.jpg',
    imageAlt: 'COBES students gathered in laboratory coats in Shao',
    approach: 'Team leaders explained the purpose, planned activities, and expected duration of the posting through established community structures. The introduction created an opportunity to answer questions, establish communication, and invite guidance before field activities began.',
    detail: 'Team leaders formally introduced the COBES posting and its purpose through the communityâ€™s established structures.',
  },
  {
    id: 'kings-palace',
    title: "King's Palace visit",
    label: 'Respect',
    image: '/cobes-data/shao-imgs/shao-village.jpg',
    imageAlt: 'Shao community landscape, the setting for engagement with traditional leadership',
    approach: 'The team made a formal courtesy visit to the Ohoro of Shao, followed the protocols of the traditional institution, and introduced the aims of the COBES posting. Students listened to the community leadership and sought guidance on how to engage residents respectfully.',
    detail: 'A courtesy visit to the Ohoro of Shao created space to learn from the traditional institution and build rapport.',
  },
  {
    id: 'community-familiarisation',
    title: 'Community familiarisation',
    label: 'Context',
    image: '/cobes-data/shao-imgs/shao-village.jpg',
    imageAlt: 'Shao community landscape observed during familiarisation',
    approach: 'Students walked through the community, observed homes, roads, services, and gathering places, and spoke with residents about everyday life. These observations helped the team understand local livelihoods, culture, beliefs, and community resources before designing assessment activities.',
    detail: 'The team learned about Shaoâ€™s culture, beliefs, religious harmony, livelihoods, and everyday community life.',
  },
  {
    id: 'facility-visits',
    title: 'Healthcare facility visits',
    label: 'Services',
    image: '/cobes-data/shao-imgs/shao-mls-outreach.jpg',
    imageAlt: 'Medical laboratory science students taking part in a community health activity',
    approach: 'After seeking permission from facility management, students met health workers and laboratory personnel at ECWA Clinic and the Primary Health Care Centre. They observed the facilities, service areas, equipment, and routine operations, and asked questions to understand how residents access care.',
    detail: 'Postings at ECWA Clinic and the Primary Health Care Centre opened conversations with health workers and laboratory personnel.',
  },
  {
    id: 'data-collection',
    title: 'Community assessment',
    label: 'Evidence',
    image: '/cobes-data/shao-imgs/Shao-map.png',
    imageAlt: 'Map used to guide community assessment and field locations in Shao',
    approach: 'The team used community mapping to organise field areas, then administered structured questionnaires and recorded direct observations during visits. Students explained the purpose of the assessment, sought consent before collecting responses, and kept notes that could be checked against field observations and facility information.',
    detail: 'Community mapping and questionnaires helped document context, priorities, and health concerns across the assessed regions.',
  },
  {
    id: 'health-education',
    title: 'Health education',
    label: 'Prevention',
    image: '/cobes-data/shao-imgs/shao-mls-outreach.jpg',
    imageAlt: 'Students participating in a community health education activity',
    approach: 'Students held clear, practical health conversations with residents and school-age children. Sessions covered malaria and typhoid prevention, personal hygiene, sanitation, and everyday protective practices, with time for questions so the guidance could respond to participantsâ€™ concerns.',
    detail: 'Health conversations on malaria, typhoid, hygiene, sanitation, and personal health reached residents and school-age children.',
  },
  {
    id: 'community-outreach',
    title: 'Community outreach',
    label: 'Action',
    image: '/cobes-data/shao-imgs/shao-mls-outreach.jpg',
    imageAlt: 'Medical laboratory science students taking part in community outreach',
    approach: 'The team coordinated outreach with local stakeholders, welcomed community members at the activity site, and provided screening and health counselling. Preventive support, including malaria-prevention activity, was paired with clear explanations and appropriate guidance on seeking follow-up care.',
    detail: 'Screening, counselling, malaria-prevention activity, and other preventive interventions connected assessment to practical support.',
  },
  {
    id: 'project-planning',
    title: 'Project planning',
    label: 'Design',
    image: '/cobes-data/shao-imgs/shaonova-img.jpg',
    imageAlt: 'COBES student team planning community field activities',
    approach: 'Students reviewed assessment findings, identified needs that could be addressed during the posting, and discussed priorities with relevant community and facility stakeholders. They then coordinated responsibilities, materials, and activity timing so that the planned work could be delivered in a practical and accountable way.',
    detail: 'Findings were used to prioritise interventions and coordinate project activities with local stakeholders and facilities.',
  },
  {
    id: 'implementation-handover',
    title: 'Implementation & handover',
    label: 'Continuity',
    image: '/cobes-data/shao-imgs/shao-mls-outreach.jpg',
    imageAlt: 'Community health activity delivered by the COBES team',
    approach: 'The team delivered the agreed activities with local partners and shared relevant materials and findings with the people and services involved. Handover conversations clarified what had been provided, where follow-up could take place, and how the work could connect with existing community and facility services.',
    detail: 'Materials, knowledge, and services were designed to sit within existing community and health-facility systems beyond the posting.',
  },
  {
    id: 'evaluation-impact',
    title: 'Evaluation & impact',
    label: 'Learning',
    image: '/cobes-data/shao-imgs/Shao-map.png',
    imageAlt: 'Community map supporting review of assessment coverage and field activities',
    approach: 'The team reviewed activity records and participation, compared delivered work with the original plan, and documented outputs and feedback. Evaluation notes captured lessons and recommendations for future work, while distinguishing immediate results from longer-term changes that require follow-up.',
    detail: 'The project documents activity, output, outcome, and long-term impact as relatedâ€”but distinctâ€”parts of accountable reporting.',
  },
] as const;

type TeamCategory = {
  id: string;
  title: string;
  role: string;
  members: { name: string; isLead?: boolean }[];
};

export const teamCategories: TeamCategory[] = [
  {
    id: 'executives', title: 'Executives', role: 'Executive leadership', members: [
      { name: 'VC' }, { name: 'KIND' }, { name: 'HOD' },
    ],
  },
  {
    id: 'team-leads', title: 'Team Leads', role: 'Project leadership', members: [
      { name: 'Adebanjo Covenant' }, { name: 'Adeyemi Fathia' },
    ],
  },
  {
    id: 'project-team', title: 'Project Team', role: 'Community project delivery', members: [
      { name: 'Fodurin Taiwo Olowatomisin', isLead: true },
      { name: 'Abdulrasheed Ruqoyah Alata' },
      { name: 'Abdulrahim Ahmad Aduuagba' },
      { name: 'Abdulqodir Abubakar Olamilekan' },
      { name: 'Azeez Aisha Temilade' },
      { name: 'Abraham Mercy' },
      { name: "Akinnibi Samee'ah" },
      { name: 'Bello Hassanat Temitayo' },
      { name: 'Ayodele Grace Motunrayo' },
    ],
  },
  {
    id: 'kitchen-team', title: 'Kitchen Team', role: 'Food and hospitality', members: [
      { name: 'Abdul-Razaq Nofisat Pejuola', isLead: true },
      { name: 'Abdulsalam Zainab Oyinkansola' },
      { name: 'Adeyemi Fathia Wuraola' },
      { name: 'Adewoyin Fatimoh Adeyemisi' },
      { name: 'Abdulganiy Habeedah Omotayo' },
      { name: 'Abdullateef Mutmainnah Omowunmi' },
      { name: 'Ayantola Fatimah Zaharau' },
      { name: 'Adekunle Gloria Olubukola' },
      { name: 'Akinola Favour Gold' },
      { name: 'Durosaro Adesewa Oluwanifemi' },
      { name: 'Adebayo Olawale' },
      { name: 'Abraham Jesutobi Blessing' },
      { name: 'Ayesina Damilola Pelumi' },
      { name: 'Abdulkareem Mustopha Adebayo' },
      { name: 'Olatunde Elujoba Samuel' },
      { name: 'Abdulazeez Aishat Ayinke' },
    ],
  },
  {
    id: 'media-team', title: 'Media Team', role: 'Media and communications', members: [
      { name: 'Jedidiah Landi', isLead: true },
      { name: 'Uredo Benjamin Shammah' },
      { name: 'Fatai Hannah' },
      { name: 'Giwa Zainab' },
      { name: 'Afolabi Ameerah' },
      { name: 'Ajiboye Oluwatomiwa' },
      { name: 'Babatunde Abigail' },
      { name: 'Abdulqoyum Oluwatobi' },
    ],
  },
  {
    id: 'report-documentation', title: 'Report and Documentation', role: 'Reporting and project records', members: [
      { name: 'Abdulrasheed Ruqoyah Alata', isLead: true },
      { name: 'Abraham Mercy' },
      { name: 'Abdullateef Mutmainah' },
      { name: 'Abdulsalam Zainab' },
      { name: 'Abdulwahab Shekinat Foluke' },
      { name: 'Abdullahi Aishat Abiodun' },
      { name: 'Abubakar Batul Ohunene' },
      { name: 'Abdulwahab Ashrafat Aduke' },
      { name: 'Kamaru Ibrahim Olalekan' },
    ],
  },
  {
    id: 'technical-team', title: 'Technical Team', role: 'Technical support', members: [
      { name: 'Adebayo Abdulmuiz', isLead: true },
      { name: 'Abdulfatai Ahmed' },
      { name: 'Adesina Folakemi Esther' },
      { name: 'Ibiloye Dominion Ayodeji' },
      { name: 'Aremu Sherif' },
    ],
  },
  {
    id: 'financial-management', title: 'Financial Management Team', role: 'Financial coordination', members: [
      { name: 'Bello Mardiyah', isLead: true },
      { name: 'Benjamin Uredo Shammah' },
      { name: 'Adeshina Aliyah Timileyin' },
      { name: 'AbdulKareem Sodiq' },
      { name: 'Ashiru Awal' },
      { name: 'AbdulWahab Ashrafah' },
      { name: 'Akinbode Suliyat' },
    ],
  },
  {
    id: 'sports-games', title: 'Sports and Games', role: 'Sports and recreation', members: [
      { name: 'Abidoye John', isLead: true },
      { name: 'Akanbi Ghaniyat' },
      { name: 'Adebayo Olawale Matthew' },
      { name: 'Adeoti Esther' },
      { name: 'Adebayo Solomon' },
      { name: 'Kamaru Ibranhim Olalakan' },
      { name: 'Adeyemi Okikiola' },
      { name: 'Ejigboye Victor' },
    ],
  },
  {
    id: 'social-team', title: 'Social Team', role: 'Social activities', members: [
      { name: 'Ejigboye Victor', isLead: true },
      { name: 'Adeyemi Okikiola' },
      { name: 'Akinola Favour' },
      { name: 'Ayanboade Rodiyyah' },
      { name: 'Abdulfatai Ahmad' },
      { name: 'Abubakar Batul Ohunene' },
      { name: 'Adebayo Ayomikun Solomon' },
      { name: 'Aderonke Ifeoluwa' },
    ],
  },
  {
    id: 'procurement-team', title: 'Procurement Team', role: 'Procurement coordination', members: [
      { name: 'Fakile Pelumi Boluwatife', isLead: true },
      { name: 'Amodu Awal Adekola' },
      { name: 'Ayesina Damilola Pelumi' },
      { name: 'Abdulroheem Abdulqoyum Oluwatobi' },
      { name: 'Abdulazeez Aishat Akorede' },
      { name: 'Ishola Mary Folawe' },
      { name: 'Akanbi Ganiyat Oluwatobi' },
    ],
  },
  {
    id: 'outreach-team', title: 'Outreach Team', role: 'Community outreach', members: [
      { name: "Akinnibi Samee'ah", isLead: true },
      { name: 'Ibiloye Dominion Ayodeji' },
      { name: 'Ishola Mary Folawe' },
      { name: 'Amusan Faithfulness' },
      { name: 'Giwa Zainab' },
      { name: 'Abdulsalam Zainab Oyinkansola' },
    ],
  },
  {
    id: 'monitoring-evaluation', title: 'Monitoring and Evaluation', role: 'Monitoring and evaluation', members: [
      { name: 'Adebanjo Covenant', isLead: true },
      { name: 'Adeeko Aishat' },
      { name: 'Adedimeta Hikmat' },
      { name: 'Ajiboye OluwaTomiwa Goodness' },
      { name: 'Abdulwahab Shekinah' },
      { name: 'Babatunde Abigael Oluwatosin' },
      { name: 'Adeyemi Okikiola Nathaniel' },
    ],
  },
] as const;
const generalSearchItems: SearchItem[] = [
  { label: 'Home', detail: 'COBES Shao Community overview', category: 'Section', target: 'home' },
  { label: 'Community assessment', detail: 'Map, assessment register, and evidence', category: 'Section', target: 'community-assessment' },
  { label: 'Learning experience', detail: 'Learning outcomes and field activity', category: 'Section', target: 'learning-experience' },
  { label: 'Learning objectives', detail: 'Six minimum and four specific learning objectives', category: 'Section', target: 'learning-objectives' },
  { label: 'Project journey', detail: 'The COBES journey from entry to impact', category: 'Section', target: 'project-journey' },
  { label: 'Project team', detail: 'Groups and member rosters', category: 'Section', target: 'team' },
];

export const searchItems: SearchItem[] = [
  ...generalSearchItems,
  ...assessmentRegions.map((region) => ({
    label: region.name,
    detail: `Assessment region Â· ${region.focus}`,
    category: 'Community region',
    target: `region-${region.id}`,
    action: { type: 'region' as const, value: region.id },
  })),
  ...learningExperiences.map((experience) => ({
    label: experience.title,
    detail: `Learning experience Â· ${experience.outcome}`,
    category: 'Learning',
    target: `learning-${experience.id}`,
    action: { type: 'learning' as const, value: experience.id },
  })),
  ...journeyStages.map((stage) => ({
    label: stage.title,
    detail: `Project journey Â· ${stage.label}`,
    category: 'Journey',
    target: `journey-${stage.id}`,
    action: { type: 'journey' as const, value: stage.id },
  })),
  ...teamCategories.map((team) => ({
    label: team.title,
    detail: `Team Â· ${team.role}`,
    category: 'Team',
    target: `team-${team.id}`,
    action: { type: 'team' as const, value: team.id },
  })),
];
