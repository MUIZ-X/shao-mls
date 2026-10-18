

export type MloContentSection = { heading: string; paragraphs: string[] };
export type MloMediaBlock = { kind: 'media'; type: 'image' | 'video'; label: string; src: string; alt?: string; poster?: string; description?: string };
export type MloContentBlock = { kind: 'content'; heading: string; paragraphs: string[] } | MloMediaBlock;
export type MloItem = { id: string; source: string; title: string; kind: 'general' | 'specific' | 'optional'; objective: string; sections?: MloContentSection[]; blocks: MloContentBlock[] };
 
export const mloItems: MloItem[] = [
  {
    "id": "mlo-01",
    "source": "General MLO 1",
    "title": "Facility Services",
    "kind": "general",
    "objective": "To Extract Data On The Number And Type Of Health Facilities And Services Present Within The Community",
    "sections": [
      {
        "heading": "Introduction",
        "paragraphs": [
          "Healthcare facilities are essential to the health and wellbeing of a community as they provide access to preventive, diagnostic, curative and other healthcare services. Their availability, personnel, resources and range of services influence the community's ability to access appropriate and timely healthcare.",
          "This section focuses on the assessment of healthcare facilities and services available in Shao Community. It presents the methods used to obtain the information, the facilities and other healthcare service points identified, the personnel and services available, laboratory and pharmaceutical services, as well as the challenges observed during the assessment."
        ]
      },
      {
        "heading": "Methodology",
        "paragraphs": [
          "Prior to the commencement of the community assessment, appropriate permission was obtained from relevant community leaders and authorities within Shao Community. Permission was also sought from the management of the healthcare facilities before conducting facility assessments and interacting with healthcare personnel.",
          "Participants involved in the questionnaire survey and interviews were informed about the purpose of the assessment and their participation was voluntary. Appropriate consent was obtained before information was collected. Participants were also assured that the information provided would be used for educational and community health assessment purposes and that confidentiality would be maintained."
        ]
      },
      {
        "heading": "Data Collection Methods",
        "paragraphs": [
          "During our community assessment, structured online questionnaires were administered to residents across the mapped areas of Shao Community. The questionnaire included questions that helped us obtain information about healthcare utilization and the healthcare facilities available within the community.",
          "We also engaged health workers at the healthcare facilities to obtain important health data."
        ]
      },
      {
        "heading": "Direct Observation",
        "paragraphs": [
          "Following the identification of the healthcare facilities, we conducted direct observations during our facility postings.",
          "On 6th August 2026, we carried out laboratory postings to healthcare facilities within Shao Community. During these visits, we observed the physical environment, different units, personnel, available resources, general operations and the nature of services provided.",
          "We also observed the laboratory units and other service areas within the facilities. This allowed us to obtain information directly from the operational environment rather than relying only on information provided by respondents."
        ]
      },
      {
        "heading": "Interview",
        "paragraphs": [
          "We conducted interviews with healthcare personnel at the facilities to obtain information that could not be completely established through observation.",
          "We interacted with:",
          "Facility heads",
          "Nurses",
          "Medical laboratory personnel",
          "Community health personnel and other healthcare workers in the facilities"
        ]
      },
      {
        "heading": "Results: Healthcare Facilities In Shao Community",
        "paragraphs": [
          "Our assessment identified two major formal healthcare facilities serving Shao Community:",
          "ECWA Clinic"
        ]
      },
      {
        "heading": "Primary Health Care Centre, Shao",
        "paragraphs": [
          "In addition to these formal facilities, we identified other healthcare service points utilized by community members. These included:"
        ]
      },
      {
        "heading": "Patent Medicine And Over-The-Counter Drug Shops Located In Various Regions Of The Shao Community",
        "paragraphs": [
          "A community-based maternity care service operated by a retired nurse",
          "The identification of these different healthcare access points gave us a broader picture of healthcare services within SHAO Community."
        ]
      },
      {
        "heading": "Evangelical Church Winning All (Ecwa) Mission Clinic",
        "paragraphs": [
          "The facility is the oldest healthcare institution in Shao,founded in the year 1953, it has deep missionary roots dating back more than a century. Over the years, it has played a significant role in providing healthcare services to the community and surrounding settlements. It currently functions as a secondary-level healthcare facility, providing essential outpatient and inpatient services, maternity care, and minor surgical procedures.",
          "Despite its longstanding contribution to healthcare delivery, the age of the facility has become increasingly evident in its physical infrastructure. Some sections of the building and supporting structures are dilapidated and in need of renovation, reflecting years of use and limited infrastructural renewal. These structural challenges may affect the efficiency, comfort, and overall quality of healthcare delivery within the facility.",
          "The laboratory unit, although modest in size, remains an important component of the facility's diagnostic services and is operated by a trained Medical Laboratory Technician. It currently provides essential investigations, including malaria microscopy, packed cell volume (PCV), blood grouping, genotype determination, and viral marker testing. However, the laboratory also faces limitations in equipment and resources. Notably, the absence of a microhaematocrit reader for accurate PCV determination has necessitated the use of improvised or less-than-ideal methods of result interpretation. This highlights the broader challenge of maintaining reliable diagnostic services in a facility where essential laboratory infrastructure and equipment have not kept pace with current healthcare needs.",
          "The facility also experiences staffing limitations, with the available workforce having to cater to a considerable range of clinical and diagnostic needs. The combination of ageing infrastructure, inadequate staffing, limited laboratory resources, and gaps in essential equipment presents an important challenge to the sustainability and quality of healthcare delivery.",
          "Nevertheless, the facility remains a critical healthcare asset to Shao, particularly because of its historical significance, established presence within the community, and the trust it has built over generations. Strengthening its infrastructure, laboratory capacity, equipment, and human resources would therefore not only improve the quality of diagnostic and clinical services but also help preserve and modernize one of the community's most important longstanding healthcare institutions."
        ]
      },
      {
        "heading": "Primary Health Care Centre",
        "paragraphs": [
          "The Primary Health Centre (PHC) serves as the main government-owned healthcare facility in Shao and represents an important part of the formal public health system within the community. The facility is headed by an officer in charge, a Community Health Extension Worker (CHEW), and provides a range of essential primary healthcare services. These include maternal and child health services, routine immunization, family planning, adolescent health counselling, circumcision, and selected basic laboratory investigations.",
          "Laboratory services are supported by relatively simple diagnostic equipment, including manual centrifuges, light microscopes, and rapid diagnostic test kits. The laboratory is managed by a Medical Laboratory Technician and provides investigations such as malaria rapid diagnostic testing, HIV and hepatitis screening, blood glucose estimation, and urinalysis. However, the diagnostic capacity of the facility remains limited by inadequate equipment and inconsistent availability of laboratory supplies.",
          "Several operational challenges affect the effective functioning of the PHC. These include periodic reagent stock-outs, inadequate staffing, and an unreliable electricity supply, all of which can disrupt the continuity of laboratory and clinical services. The electrophoresis equipment intended for haemoglobin and genotype-related investigations has reportedly remained non-functional for a prolonged period, while the procurement of essential reagents is irregular and, in some instances, dependent on donor support.",
          "The facility also records relatively low patient utilization, with an average weekly attendance of approximately 15 patients. This low attendance may reflect the community's preference for other healthcare options, including private facilities, patent medicine vendors, self-medication, and traditional healthcare practices. Consequently, despite its strategic position as the government's primary healthcare presence in Shao, the PHC continues to face challenges related to resources, infrastructure, service utilization, and community dependence on alternative sources of care.",
          "The healthcare services identified across the formal facilities (ECWA CLINIC AND PHC SHAO) can be grouped into the following areas:",
          "Maternal and Child Health Services",
          "Antenatal care",
          "Delivery services",
          "Postnatal care",
          "Immunization",
          "Outpatient and Minor Emergency Care",
          "Common conditions managed include:",
          "Malaria",
          "Typhoid",
          "Respiratory tract infections",
          "Gastrointestinal illnesses",
          "Basic Diagnostic Services",
          "Available diagnostic investigations include:",
          "Malaria microscopy",
          "Urinalysis",
          "Packed cell volume",
          "Genotype testing",
          "Viral marker/hepatitis screening",
          "Pregnancy testing",
          "Blood grouping"
        ]
      },
      {
        "heading": "Patent Medicine And Over The Counter Drug Shops",
        "paragraphs": [
          "Patent medicine vendors and community chemist shops are widely distributed across Shao, providing residents with easy and affordable access to medicines and other basic health products. For many households, these outlets serve as the first point of care for common illnesses because they are readily available and require no formal appointment.",
          "Findings from our community survey, however, revealed a high level of reliance on medicines obtained without adequate professional evaluation. This pattern promotes self-medication, inappropriate drug use, and delays in seeking appropriate medical care for conditions that require proper diagnosis and treatment.",
          "Notably, 23% of respondents—approximately one in every four residents—reported going directly to a chemist or patent medicine vendor instead of visiting a Primary Health Centre or hospital. This finding reflects an important healthcare-seeking behaviour within the community and underscores the need for improved public health education on the rational use of medicines and timely utilization of formal healthcare services."
        ]
      },
      {
        "heading": "Community Based Maternity Care",
        "paragraphs": [
          "A community-based maternity care service operated by a retired midwife was also identified within Shao Community. The service appears to be highly utilized by residents, particularly pregnant women, with the operator reporting an average daily attendance of approximately 50–60 clients. This level of patronage is particularly notable when compared with the Primary Health Centre, which reportedly records a similar number of patients over an entire month.",
          "The high utilization of this community-based maternity service suggests that it has become an important source of maternal healthcare for residents and may reflect factors such as accessibility, familiarity, affordability, and community trust. However, the substantial dependence on such a service also emphasizes the need for effective collaboration and referral pathways between community-based maternity providers and formal healthcare institutions.",
          "Establishing clear and functional referral linkages would help ensure that pregnant women, mothers, and newborns who develop complications or require investigations, emergency interventions, or specialized care can be transferred promptly to an appropriate health facility, thereby reducing delays and improving maternal and neonatal outcomes."
        ]
      },
      {
        "heading": "Personnel Identified",
        "paragraphs": [
          "The facility assessment identified various categories of healthcare personnel involved in the provision of healthcare services within the community.",
          "The major categories encountered included:",
          "Facility heads",
          "Nurses",
          "Medical laboratory personnel",
          "Community health personnel",
          "Each category plays a distinct role in healthcare delivery. Nurses are involved in patient care and clinical activities, while community health personnel support primary healthcare and community-based interventions. Medical laboratory personnel provide essential diagnostic services that assist in clinical decision-making.",
          "The absence of a resident doctor at the Primary Health Care Centre was also observed during the assessment. This limitation may affect the facility’s capacity to manage cases requiring medical intervention beyond its available services, further emphasizing the need for a functional referral system."
        ]
      },
      {
        "heading": "Challenges Observed And Recommendations",
        "paragraphs": [
          "Shortage of Healthcare Personnel.",
          "The healthcare facilities were understaffed, with limited access to specialists and reduced capacity to provide certain advanced services. Surgical cases and some emergencies are referred to other facilities, particularly Alagbado and Sobi Specialist Hospital.",
          "Recommendation: Adequate recruitment and deployment of healthcare personnel, including specialists, should be prioritized, alongside strengthening referral systems for cases beyond the facilities’ capacity.",
          "Low Utilization of Healthcare Facilities.",
          "Low patient attendance was observed across the facilities, indicating limited utilization of available healthcare services. The PHC recorded approximately 5 patients per day, while the ECWA facility recorded about 2–3 patients daily.",
          "Recommendation: Community health education, awareness campaigns, and community engagement should be strengthened to promote appropriate use of available healthcare services.",
          "Inadequate Equipment and Funding.",
          "The PHC had limited functional equipment, with some equipment reportedly damaged and unused for several years due to inadequate funding for repairs and replacement.",
          "Recommendation: Increased funding should be provided for the procurement, maintenance, repair, and timely replacement of essential healthcare equipment."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "The assessment of healthcare facilities and services in Shao Community provided us with a comprehensive understanding of the existing healthcare infrastructure and the different avenues through which residents seek care.",
          "Two major formal healthcare facilities, the ECWA Clinic and Primary Health Care Centre, Shao, were identified and assessed. In addition, patent medicine and over-the-counter drug shops and a community-based maternity care service operated by a retired nurse were identified as other healthcare access points within the community.",
          "Through questionnaires, direct observation and interviews, we assessed the healthcare environment, personnel, clinical services, laboratory services, pharmaceutical services and challenges associated with service delivery.",
          "The exercise demonstrated that effective community health planning requires an understanding of the entire healthcare landscape, including formal facilities and other healthcare providers utilized by residents. It also strengthened our understanding of the role of different healthcare professionals and the importance of laboratory services in supporting diagnosis and patient management."
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Introduction",
        "paragraphs": [
          "Healthcare facilities are essential to the health and wellbeing of a community as they provide access to preventive, diagnostic, curative and other healthcare services. Their availability, personnel, resources and range of services influence the community's ability to access appropriate and timely healthcare.",
          "This section focuses on the assessment of healthcare facilities and services available in Shao Community. It presents the methods used to obtain the information, the facilities and other healthcare service points identified, the personnel and services available, laboratory and pharmaceutical services, as well as the challenges observed during the assessment."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Facility Services — field overview",
        "src": "",
        "poster": "",
        "alt": "Facility Services — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Methodology",
        "paragraphs": [
          "Prior to the commencement of the community assessment, appropriate permission was obtained from relevant community leaders and authorities within Shao Community. Permission was also sought from the management of the healthcare facilities before conducting facility assessments and interacting with healthcare personnel.",
          "Participants involved in the questionnaire survey and interviews were informed about the purpose of the assessment and their participation was voluntary. Appropriate consent was obtained before information was collected. Participants were also assured that the information provided would be used for educational and community health assessment purposes and that confidentiality would be maintained."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Facility Services — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Facility Services — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Data Collection Methods",
        "paragraphs": [
          "During our community assessment, structured online questionnaires were administered to residents across the mapped areas of Shao Community. The questionnaire included questions that helped us obtain information about healthcare utilization and the healthcare facilities available within the community.",
          "We also engaged health workers at the healthcare facilities to obtain important health data."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Facility Services — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Facility Services — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Direct Observation",
        "paragraphs": [
          "Following the identification of the healthcare facilities, we conducted direct observations during our facility postings.",
          "On 6th August 2026, we carried out laboratory postings to healthcare facilities within Shao Community. During these visits, we observed the physical environment, different units, personnel, available resources, general operations and the nature of services provided.",
          "We also observed the laboratory units and other service areas within the facilities. This allowed us to obtain information directly from the operational environment rather than relying only on information provided by respondents."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Facility Services — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Facility Services — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Interview",
        "paragraphs": [
          "We conducted interviews with healthcare personnel at the facilities to obtain information that could not be completely established through observation.",
          "We interacted with:",
          "Facility heads",
          "Nurses",
          "Medical laboratory personnel",
          "Community health personnel and other healthcare workers in the facilities"
        ]
      },
      {
        "kind": "content",
        "heading": "Results: Healthcare Facilities In Shao Community",
        "paragraphs": [
          "Our assessment identified two major formal healthcare facilities serving Shao Community:",
          "ECWA Clinic"
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Facility Services — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Facility Services — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Primary Health Care Centre, Shao",
        "paragraphs": [
          "In addition to these formal facilities, we identified other healthcare service points utilized by community members. These included:"
        ]
      },
      {
        "kind": "content",
        "heading": "Patent Medicine And Over-The-Counter Drug Shops Located In Various Regions Of The Shao Community",
        "paragraphs": [
          "A community-based maternity care service operated by a retired nurse",
          "The identification of these different healthcare access points gave us a broader picture of healthcare services within SHAO Community."
        ]
      },
      {
        "kind": "content",
        "heading": "Evangelical Church Winning All (Ecwa) Mission Clinic",
        "paragraphs": [
          "The facility is the oldest healthcare institution in Shao,founded in the year 1953, it has deep missionary roots dating back more than a century. Over the years, it has played a significant role in providing healthcare services to the community and surrounding settlements. It currently functions as a secondary-level healthcare facility, providing essential outpatient and inpatient services, maternity care, and minor surgical procedures.",
          "Despite its longstanding contribution to healthcare delivery, the age of the facility has become increasingly evident in its physical infrastructure. Some sections of the building and supporting structures are dilapidated and in need of renovation, reflecting years of use and limited infrastructural renewal. These structural challenges may affect the efficiency, comfort, and overall quality of healthcare delivery within the facility.",
          "The laboratory unit, although modest in size, remains an important component of the facility's diagnostic services and is operated by a trained Medical Laboratory Technician. It currently provides essential investigations, including malaria microscopy, packed cell volume (PCV), blood grouping, genotype determination, and viral marker testing. However, the laboratory also faces limitations in equipment and resources. Notably, the absence of a microhaematocrit reader for accurate PCV determination has necessitated the use of improvised or less-than-ideal methods of result interpretation. This highlights the broader challenge of maintaining reliable diagnostic services in a facility where essential laboratory infrastructure and equipment have not kept pace with current healthcare needs.",
          "The facility also experiences staffing limitations, with the available workforce having to cater to a considerable range of clinical and diagnostic needs. The combination of ageing infrastructure, inadequate staffing, limited laboratory resources, and gaps in essential equipment presents an important challenge to the sustainability and quality of healthcare delivery.",
          "Nevertheless, the facility remains a critical healthcare asset to Shao, particularly because of its historical significance, established presence within the community, and the trust it has built over generations. Strengthening its infrastructure, laboratory capacity, equipment, and human resources would therefore not only improve the quality of diagnostic and clinical services but also help preserve and modernize one of the community's most important longstanding healthcare institutions."
        ]
      },
      {
        "kind": "content",
        "heading": "Primary Health Care Centre",
        "paragraphs": [
          "The Primary Health Centre (PHC) serves as the main government-owned healthcare facility in Shao and represents an important part of the formal public health system within the community. The facility is headed by an officer in charge, a Community Health Extension Worker (CHEW), and provides a range of essential primary healthcare services. These include maternal and child health services, routine immunization, family planning, adolescent health counselling, circumcision, and selected basic laboratory investigations.",
          "Laboratory services are supported by relatively simple diagnostic equipment, including manual centrifuges, light microscopes, and rapid diagnostic test kits. The laboratory is managed by a Medical Laboratory Technician and provides investigations such as malaria rapid diagnostic testing, HIV and hepatitis screening, blood glucose estimation, and urinalysis. However, the diagnostic capacity of the facility remains limited by inadequate equipment and inconsistent availability of laboratory supplies.",
          "Several operational challenges affect the effective functioning of the PHC. These include periodic reagent stock-outs, inadequate staffing, and an unreliable electricity supply, all of which can disrupt the continuity of laboratory and clinical services. The electrophoresis equipment intended for haemoglobin and genotype-related investigations has reportedly remained non-functional for a prolonged period, while the procurement of essential reagents is irregular and, in some instances, dependent on donor support.",
          "The facility also records relatively low patient utilization, with an average weekly attendance of approximately 15 patients. This low attendance may reflect the community's preference for other healthcare options, including private facilities, patent medicine vendors, self-medication, and traditional healthcare practices. Consequently, despite its strategic position as the government's primary healthcare presence in Shao, the PHC continues to face challenges related to resources, infrastructure, service utilization, and community dependence on alternative sources of care.",
          "The healthcare services identified across the formal facilities (ECWA CLINIC AND PHC SHAO) can be grouped into the following areas:",
          "Maternal and Child Health Services",
          "Antenatal care",
          "Delivery services",
          "Postnatal care",
          "Immunization",
          "Outpatient and Minor Emergency Care",
          "Common conditions managed include:",
          "Malaria",
          "Typhoid",
          "Respiratory tract infections",
          "Gastrointestinal illnesses",
          "Basic Diagnostic Services",
          "Available diagnostic investigations include:",
          "Malaria microscopy",
          "Urinalysis",
          "Packed cell volume",
          "Genotype testing",
          "Viral marker/hepatitis screening",
          "Pregnancy testing",
          "Blood grouping"
        ]
      },
      {
        "kind": "content",
        "heading": "Patent Medicine And Over The Counter Drug Shops",
        "paragraphs": [
          "Patent medicine vendors and community chemist shops are widely distributed across Shao, providing residents with easy and affordable access to medicines and other basic health products. For many households, these outlets serve as the first point of care for common illnesses because they are readily available and require no formal appointment.",
          "Findings from our community survey, however, revealed a high level of reliance on medicines obtained without adequate professional evaluation. This pattern promotes self-medication, inappropriate drug use, and delays in seeking appropriate medical care for conditions that require proper diagnosis and treatment.",
          "Notably, 23% of respondents—approximately one in every four residents—reported going directly to a chemist or patent medicine vendor instead of visiting a Primary Health Centre or hospital. This finding reflects an important healthcare-seeking behaviour within the community and underscores the need for improved public health education on the rational use of medicines and timely utilization of formal healthcare services."
        ]
      },
      {
        "kind": "content",
        "heading": "Community Based Maternity Care",
        "paragraphs": [
          "A community-based maternity care service operated by a retired midwife was also identified within Shao Community. The service appears to be highly utilized by residents, particularly pregnant women, with the operator reporting an average daily attendance of approximately 50–60 clients. This level of patronage is particularly notable when compared with the Primary Health Centre, which reportedly records a similar number of patients over an entire month.",
          "The high utilization of this community-based maternity service suggests that it has become an important source of maternal healthcare for residents and may reflect factors such as accessibility, familiarity, affordability, and community trust. However, the substantial dependence on such a service also emphasizes the need for effective collaboration and referral pathways between community-based maternity providers and formal healthcare institutions.",
          "Establishing clear and functional referral linkages would help ensure that pregnant women, mothers, and newborns who develop complications or require investigations, emergency interventions, or specialized care can be transferred promptly to an appropriate health facility, thereby reducing delays and improving maternal and neonatal outcomes."
        ]
      },
      {
        "kind": "content",
        "heading": "Personnel Identified",
        "paragraphs": [
          "The facility assessment identified various categories of healthcare personnel involved in the provision of healthcare services within the community.",
          "The major categories encountered included:",
          "Facility heads",
          "Nurses",
          "Medical laboratory personnel",
          "Community health personnel",
          "Each category plays a distinct role in healthcare delivery. Nurses are involved in patient care and clinical activities, while community health personnel support primary healthcare and community-based interventions. Medical laboratory personnel provide essential diagnostic services that assist in clinical decision-making.",
          "The absence of a resident doctor at the Primary Health Care Centre was also observed during the assessment. This limitation may affect the facility’s capacity to manage cases requiring medical intervention beyond its available services, further emphasizing the need for a functional referral system."
        ]
      },
      {
        "kind": "content",
        "heading": "Challenges Observed And Recommendations",
        "paragraphs": [
          "Shortage of Healthcare Personnel.",
          "The healthcare facilities were understaffed, with limited access to specialists and reduced capacity to provide certain advanced services. Surgical cases and some emergencies are referred to other facilities, particularly Alagbado and Sobi Specialist Hospital.",
          "Recommendation: Adequate recruitment and deployment of healthcare personnel, including specialists, should be prioritized, alongside strengthening referral systems for cases beyond the facilities’ capacity.",
          "Low Utilization of Healthcare Facilities.",
          "Low patient attendance was observed across the facilities, indicating limited utilization of available healthcare services. The PHC recorded approximately 5 patients per day, while the ECWA facility recorded about 2–3 patients daily.",
          "Recommendation: Community health education, awareness campaigns, and community engagement should be strengthened to promote appropriate use of available healthcare services.",
          "Inadequate Equipment and Funding.",
          "The PHC had limited functional equipment, with some equipment reportedly damaged and unused for several years due to inadequate funding for repairs and replacement.",
          "Recommendation: Increased funding should be provided for the procurement, maintenance, repair, and timely replacement of essential healthcare equipment."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "The assessment of healthcare facilities and services in Shao Community provided us with a comprehensive understanding of the existing healthcare infrastructure and the different avenues through which residents seek care.",
          "Two major formal healthcare facilities, the ECWA Clinic and Primary Health Care Centre, Shao, were identified and assessed. In addition, patent medicine and over-the-counter drug shops and a community-based maternity care service operated by a retired nurse were identified as other healthcare access points within the community.",
          "Through questionnaires, direct observation and interviews, we assessed the healthcare environment, personnel, clinical services, laboratory services, pharmaceutical services and challenges associated with service delivery.",
          "The exercise demonstrated that effective community health planning requires an understanding of the entire healthcare landscape, including formal facilities and other healthcare providers utilized by residents. It also strengthened our understanding of the role of different healthcare professionals and the importance of laboratory services in supporting diagnosis and patient management."
        ]
      }
    ]
  },
  {
    "id": "mlo-02",
    "source": "General MLO 2",
    "title": "Healthcare Access",
    "kind": "general",
    "objective": "To Determine The Various Challenges Mitigating Easy Access To Satisfactory Health Services In The Community",
    "sections": [
      {
        "heading": "Introduction",
        "paragraphs": [
          "Access to satisfactory healthcare depends not only on the presence of health facilities but also on the ability of community members to reach, afford and appropriately use the available services. This section details the report of our assessment to determine factors that affect residents' access to healthcare through community mapping, household questionnaire administration, interactions with residents and observations made during visits to healthcare facilities."
        ]
      },
      {
        "heading": "Objectives",
        "paragraphs": [
          "The objectives of the assessment were to:",
          "Identify the major factors limiting residents' access to satisfactory healthcare services in Shao Community.",
          "Assess the physical, financial and behavioural barriers affecting healthcare utilization."
        ]
      },
      {
        "heading": "Methodology",
        "paragraphs": [
          "The community health assessment was carried out through a combination of questionnaire administration, community mapping, direct observation, and interviews."
        ]
      },
      {
        "heading": "Study Design",
        "paragraphs": [
          "A community-based descriptive cross-sectional approach was used to assess the challenges affecting access to healthcare services in Shao Community.",
          "The assessment formed part of the broader community mapping and health needs assessment conducted during the COBES posting. The community was divided into eight subregions: Oke Lado, Ogidi, Oke Boo, Ode Aare, Ode Alawon, Isale Oja, Oju Oja and Oke Sinniga. Households visits were conducted within the assigned areas, and consenting residents participated in the questionnaire survey.",
          "The team also obtained additional information through direct observation during community mapping, interactions with residents and healthcare workers, and assessments of healthcare facilities within the community. The questionnaire responses and field observations were reviewed to identify recurring barriers to healthcare access and utilization."
        ]
      },
      {
        "heading": "Results",
        "paragraphs": [
          "The assessment identified several major challenges affecting access to satisfactory healthcare services in Shao Community. These includes:",
          "Distance and Physical Access",
          "One of the major barriers to healthcare access identified during the assessment was the physical distance between some residents and functional healthcare facilities and laboratories, particularly for those living in the more remote areas of the community. The team observed that transportation difficulties and the distance involved may delay residents from seeking timely healthcare, especially when urgent attention is required.",
          "This challenge is further compounded by limited awareness of the location and services of available laboratories. Some residents were unable to identify the nearest laboratory or were unfamiliar with the diagnostic services offered. Therefore, the presence of a laboratory within or around the community does not necessarily guarantee effective access when residents are unaware of its location or how to utilize its services.",
          "Cost of Healthcare",
          "The cost of healthcare also limits access for some residents. Expenses associated with consultation, laboratory investigations, medications and transportation may discourage individuals from seeking formal healthcare services.",
          "Financial constraints can also influence healthcare-seeking behaviour. Residents who cannot afford formal healthcare may delay seeking care or resort to cheaper alternatives. This may prevent them from receiving appropriate diagnosis and treatment at the appropriate time.",
          "Self-Medication and Reliance on Patent Medicine Vendors",
          "The assessment identified self-medication and reliance on chemists, pharmacies and patent medicine vendors as important challenges to satisfactory healthcare access. Some residents seek treatment directly from these sources without first undergoing appropriate clinical assessment or laboratory investigation. This practice may result in treatment based on presumed rather than confirmed causes of illness.",
          "The survey also indicated that laboratory investigations are not consistently requested before treatment. This suggests that some residents receive treatment without adequate diagnostic confirmation, particularly for illnesses such as malaria. Such practices may contribute to inappropriate treatment and delay the identification of other conditions that present with similar symptoms.",
          "Transportation and Infrastructure Challenges",
          "Transportation difficulties further restrict access to healthcare services. Residents who live far from healthcare facilities may depend on available means of transportation to reach them. Where transportation is unavailable, costly or inconvenient, residents may postpone healthcare visits or choose closer but less appropriate sources of care.",
          "Poor road conditions and inadequate transportation links between some parts of the community and healthcare facilities may further increase the difficulty of accessing care, particularly for individuals who require urgent attention, older persons and those with mobility limitations.",
          "Long Waiting Times and Attitude of Healthcare Workers",
          "Long waiting times were also identified as a factor that may discourage residents from seeking healthcare services or returning for follow-up care. When patients spend considerable time waiting before receiving attention, they may become less willing to use formal healthcare services consistently.",
          "The attitude of some healthcare workers was another reported concern. Poor interactions between healthcare providers and patients can reduce patient satisfaction and confidence in healthcare facilities. This may discourage residents from returning to facilities when they require further care.",
          "Limited Awareness and Utilization of Laboratory Services",
          "The assessment revealed a significant gap in community awareness of laboratory services. Some residents were unfamiliar with the location of laboratories, the investigations available and the role of laboratory testing in healthcare.",
          "This limited awareness may contribute to poor utilization of diagnostic services. Where residents do not understand the importance of laboratory investigations, they may accept treatment without appropriate testing. The team therefore identified the need to strengthen community education on the purpose and availability of laboratory services.",
          "This finding was particularly relevant to the team's Medical Laboratory Science-specific objectives. During the outreach, the team emphasized the importance of laboratory investigations and encouraged community members, particularly individuals of marriageable age and prospective couples, to access genotype testing and make appropriate use of the laboratory services available at the Primary Health Care Centre.",
          "Environmental Sanitation and Disease Burden",
          "Poor environmental sanitation also presents an indirect challenge to healthcare access by increasing the occurrence of preventable illnesses and placing additional pressure on available healthcare services.",
          "The assessment identified practices such as open defecation and indiscriminate waste disposal within parts of the community. These practices increase the risk of environmental contamination and contribute to conditions that favour the spread of infectious diseases.",
          "The team observed these environmental concerns during community activities and later carried out a sanitation exercise at Isale Oja. Residents were sensitized on proper waste disposal, the use of the community incinerator and the importance of preventing the disposal of refuse into drainage channels, water sources and surrounding bushes."
        ]
      },
      {
        "heading": "Overall Findings",
        "paragraphs": [
          "The findings show that access to healthcare in Shao Community is influenced by a combination of physical, economic, behavioural, service-related and environmental factors.",
          "Improving healthcare access will therefore require more than increasing the number of facilities. The community needs improved awareness, better use of existing services, stronger diagnostic-service utilization, improved environmental practices and continued collaboration between healthcare providers, community leaders and residents."
        ]
      },
      {
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on the findings of the assessment, the following measures are recommended:",
          "Improve community awareness of available healthcare services: Regular health education should be conducted to inform residents about the locations, services and operating capacities of available healthcare facilities and laboratories.",
          "Strengthen laboratory-service advocacy: Healthcare workers and community health programmes should emphasize the importance of appropriate laboratory investigations in supporting accurate diagnosis and treatment.",
          "Promote appropriate healthcare-seeking behaviour: Community members should be encouraged to seek care from qualified healthcare professionals rather than relying primarily on self-medication or unregulated sources of treatment.",
          "Improve access for residents in distant areas: Relevant authorities and community stakeholders should explore ways of improving transportation and physical access between outlying areas and functional healthcare facilities.",
          "Address financial barriers: Existing public health programmes and other appropriate support mechanisms should be strengthened to reduce the financial burden associated with essential healthcare services and investigations.",
          "Improve patient experience: Healthcare facilities should promote respectful communication, patient-centred care and efficient service delivery to reduce dissatisfaction arising from poor attitudes and prolonged waiting times.",
          "Strengthen environmental sanitation: The community should sustain sanitation activities and encourage proper waste disposal, use of the available incinerator and protection of water sources.",
          "Maintain community-based health education: Health education should be delivered through community leaders, religious institutions, schools and other established community structures to ensure that health messages reach different groups within the population.",
          "Strengthen collaboration among stakeholders: Traditional leaders, community representatives, healthcare workers, government agencies and community-based organizations should work together to identify and address barriers to healthcare access.",
          "Ensure continuity of interventions: Community health interventions should include clear ownership and follow-up mechanisms so that projects and health education activities remain functional and beneficial after the COBES team leaves the community."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "The assessment demonstrated that access to satisfactory healthcare in Shao Community is influenced by several interconnected physical, financial, behavioural, service-related, and environmental factors. Addressing these challenges will require improved community awareness, appropriate use of healthcare and laboratory services, better patient experience, and continued collaboration among healthcare providers, community leaders, and residents."
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Introduction",
        "paragraphs": [
          "Access to satisfactory healthcare depends not only on the presence of health facilities but also on the ability of community members to reach, afford and appropriately use the available services. This section details the report of our assessment to determine factors that affect residents' access to healthcare through community mapping, household questionnaire administration, interactions with residents and observations made during visits to healthcare facilities."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Healthcare Access — field overview",
        "src": "",
        "poster": "",
        "alt": "Healthcare Access — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Objectives",
        "paragraphs": [
          "The objectives of the assessment were to:",
          "Identify the major factors limiting residents' access to satisfactory healthcare services in Shao Community.",
          "Assess the physical, financial and behavioural barriers affecting healthcare utilization."
        ]
      },
      {
        "kind": "content",
        "heading": "Methodology",
        "paragraphs": [
          "The community health assessment was carried out through a combination of questionnaire administration, community mapping, direct observation, and interviews."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Healthcare Access — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Healthcare Access — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Study Design",
        "paragraphs": [
          "A community-based descriptive cross-sectional approach was used to assess the challenges affecting access to healthcare services in Shao Community.",
          "The assessment formed part of the broader community mapping and health needs assessment conducted during the COBES posting. The community was divided into eight subregions: Oke Lado, Ogidi, Oke Boo, Ode Aare, Ode Alawon, Isale Oja, Oju Oja and Oke Sinniga. Households visits were conducted within the assigned areas, and consenting residents participated in the questionnaire survey.",
          "The team also obtained additional information through direct observation during community mapping, interactions with residents and healthcare workers, and assessments of healthcare facilities within the community. The questionnaire responses and field observations were reviewed to identify recurring barriers to healthcare access and utilization."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Healthcare Access — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Healthcare Access — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Results",
        "paragraphs": [
          "The assessment identified several major challenges affecting access to satisfactory healthcare services in Shao Community. These includes:",
          "Distance and Physical Access",
          "One of the major barriers to healthcare access identified during the assessment was the physical distance between some residents and functional healthcare facilities and laboratories, particularly for those living in the more remote areas of the community. The team observed that transportation difficulties and the distance involved may delay residents from seeking timely healthcare, especially when urgent attention is required.",
          "This challenge is further compounded by limited awareness of the location and services of available laboratories. Some residents were unable to identify the nearest laboratory or were unfamiliar with the diagnostic services offered. Therefore, the presence of a laboratory within or around the community does not necessarily guarantee effective access when residents are unaware of its location or how to utilize its services.",
          "Cost of Healthcare",
          "The cost of healthcare also limits access for some residents. Expenses associated with consultation, laboratory investigations, medications and transportation may discourage individuals from seeking formal healthcare services.",
          "Financial constraints can also influence healthcare-seeking behaviour. Residents who cannot afford formal healthcare may delay seeking care or resort to cheaper alternatives. This may prevent them from receiving appropriate diagnosis and treatment at the appropriate time.",
          "Self-Medication and Reliance on Patent Medicine Vendors",
          "The assessment identified self-medication and reliance on chemists, pharmacies and patent medicine vendors as important challenges to satisfactory healthcare access. Some residents seek treatment directly from these sources without first undergoing appropriate clinical assessment or laboratory investigation. This practice may result in treatment based on presumed rather than confirmed causes of illness.",
          "The survey also indicated that laboratory investigations are not consistently requested before treatment. This suggests that some residents receive treatment without adequate diagnostic confirmation, particularly for illnesses such as malaria. Such practices may contribute to inappropriate treatment and delay the identification of other conditions that present with similar symptoms.",
          "Transportation and Infrastructure Challenges",
          "Transportation difficulties further restrict access to healthcare services. Residents who live far from healthcare facilities may depend on available means of transportation to reach them. Where transportation is unavailable, costly or inconvenient, residents may postpone healthcare visits or choose closer but less appropriate sources of care.",
          "Poor road conditions and inadequate transportation links between some parts of the community and healthcare facilities may further increase the difficulty of accessing care, particularly for individuals who require urgent attention, older persons and those with mobility limitations.",
          "Long Waiting Times and Attitude of Healthcare Workers",
          "Long waiting times were also identified as a factor that may discourage residents from seeking healthcare services or returning for follow-up care. When patients spend considerable time waiting before receiving attention, they may become less willing to use formal healthcare services consistently.",
          "The attitude of some healthcare workers was another reported concern. Poor interactions between healthcare providers and patients can reduce patient satisfaction and confidence in healthcare facilities. This may discourage residents from returning to facilities when they require further care.",
          "Limited Awareness and Utilization of Laboratory Services",
          "The assessment revealed a significant gap in community awareness of laboratory services. Some residents were unfamiliar with the location of laboratories, the investigations available and the role of laboratory testing in healthcare.",
          "This limited awareness may contribute to poor utilization of diagnostic services. Where residents do not understand the importance of laboratory investigations, they may accept treatment without appropriate testing. The team therefore identified the need to strengthen community education on the purpose and availability of laboratory services.",
          "This finding was particularly relevant to the team's Medical Laboratory Science-specific objectives. During the outreach, the team emphasized the importance of laboratory investigations and encouraged community members, particularly individuals of marriageable age and prospective couples, to access genotype testing and make appropriate use of the laboratory services available at the Primary Health Care Centre.",
          "Environmental Sanitation and Disease Burden",
          "Poor environmental sanitation also presents an indirect challenge to healthcare access by increasing the occurrence of preventable illnesses and placing additional pressure on available healthcare services.",
          "The assessment identified practices such as open defecation and indiscriminate waste disposal within parts of the community. These practices increase the risk of environmental contamination and contribute to conditions that favour the spread of infectious diseases.",
          "The team observed these environmental concerns during community activities and later carried out a sanitation exercise at Isale Oja. Residents were sensitized on proper waste disposal, the use of the community incinerator and the importance of preventing the disposal of refuse into drainage channels, water sources and surrounding bushes."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Healthcare Access — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Healthcare Access — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Overall Findings",
        "paragraphs": [
          "The findings show that access to healthcare in Shao Community is influenced by a combination of physical, economic, behavioural, service-related and environmental factors.",
          "Improving healthcare access will therefore require more than increasing the number of facilities. The community needs improved awareness, better use of existing services, stronger diagnostic-service utilization, improved environmental practices and continued collaboration between healthcare providers, community leaders and residents."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Healthcare Access — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Healthcare Access — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on the findings of the assessment, the following measures are recommended:",
          "Improve community awareness of available healthcare services: Regular health education should be conducted to inform residents about the locations, services and operating capacities of available healthcare facilities and laboratories.",
          "Strengthen laboratory-service advocacy: Healthcare workers and community health programmes should emphasize the importance of appropriate laboratory investigations in supporting accurate diagnosis and treatment.",
          "Promote appropriate healthcare-seeking behaviour: Community members should be encouraged to seek care from qualified healthcare professionals rather than relying primarily on self-medication or unregulated sources of treatment.",
          "Improve access for residents in distant areas: Relevant authorities and community stakeholders should explore ways of improving transportation and physical access between outlying areas and functional healthcare facilities.",
          "Address financial barriers: Existing public health programmes and other appropriate support mechanisms should be strengthened to reduce the financial burden associated with essential healthcare services and investigations.",
          "Improve patient experience: Healthcare facilities should promote respectful communication, patient-centred care and efficient service delivery to reduce dissatisfaction arising from poor attitudes and prolonged waiting times.",
          "Strengthen environmental sanitation: The community should sustain sanitation activities and encourage proper waste disposal, use of the available incinerator and protection of water sources.",
          "Maintain community-based health education: Health education should be delivered through community leaders, religious institutions, schools and other established community structures to ensure that health messages reach different groups within the population.",
          "Strengthen collaboration among stakeholders: Traditional leaders, community representatives, healthcare workers, government agencies and community-based organizations should work together to identify and address barriers to healthcare access.",
          "Ensure continuity of interventions: Community health interventions should include clear ownership and follow-up mechanisms so that projects and health education activities remain functional and beneficial after the COBES team leaves the community."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "The assessment demonstrated that access to satisfactory healthcare in Shao Community is influenced by several interconnected physical, financial, behavioural, service-related, and environmental factors. Addressing these challenges will require improved community awareness, appropriate use of healthcare and laboratory services, better patient experience, and continued collaboration among healthcare providers, community leaders, and residents."
        ]
      }
    ]
  },
  {
    "id": "mlo-03",
    "source": "General MLO 3",
    "title": "Facility Barriers",
    "kind": "general",
    "objective": "To Determine The Impediments Inherent With The Health Service Providers And Facilities Making Access To Satisfactory Health Care A Daunting Task",
    "sections": [
      {
        "heading": "Introduction",
        "paragraphs": [
          "The presence of healthcare facilities and health service providers within a community does not automatically guarantee access to satisfactory healthcare. The quality and effectiveness of healthcare delivery depend on the availability of qualified personnel, functional equipment, appropriate diagnostic services, adequate documentation, efficient service delivery and the capacity of healthcare facilities to meet the needs of the population.",
          "As part of the COBES programme in Shao Community, the team assessed healthcare facilities within the community, including the ECWA Clinic and the Primary Health Care Centre, Shao. The assessment involved direct observation of facility operations, interaction with healthcare workers and evaluation of available resources. Particular attention was given to the laboratory units, where the team assessed available personnel, equipment, investigations performed, record keeping and general laboratory practices.",
          "The assessment identified several provider- and facility-related impediments that may limit the ability of the healthcare facilities to provide satisfactory and comprehensive services to residents of Shao Community."
        ]
      },
      {
        "heading": "Objectives",
        "paragraphs": [
          "The objectives of the assessment were to:",
          "Assess the capacity of healthcare facilities and service providers to deliver satisfactory healthcare services.",
          "Identify limitations related to healthcare personnel, equipment and diagnostic resources.",
          "Assess the availability and utilization of laboratory services within the facilities.",
          "Examine record-keeping practices and other factors affecting healthcare service delivery.",
          "Identify how provider- and facility-related limitations affect access to appropriate healthcare.",
          "Identify practical interventions that can strengthen healthcare and laboratory service delivery within the community."
        ]
      },
      {
        "heading": "Methodology",
        "paragraphs": [
          "An assessment was conducted as part of the COBES programme to evaluate the healthcare facilities available in Shao Community and assess their capacity to provide clinical and laboratory services."
        ]
      },
      {
        "heading": "Study Design",
        "paragraphs": [
          "A descriptive facility-based assessment was conducted as part of the COBES programme in Shao Community.",
          "Verbal consent was obtained for the study in lieu of ethical considerations."
        ]
      },
      {
        "heading": "Approach",
        "paragraphs": [
          "The team visited healthcare facilities within the community, including the ECWA Clinic and the Primary Health Care Centre, Shao. During the visits, team members interacted with healthcare workers and observed the general operations of the facilities.",
          "The assessment covered interviews with various healthcare personnel, facility observation checklist including available equipment and resources, laboratory investigations, laboratory practices, record keeping and the general capacity of the facilities to provide healthcare services and also documents and records review.",
          "The team also identified gaps requiring intervention and considered their implications for healthcare and laboratory service delivery."
        ]
      },
      {
        "heading": "Results",
        "paragraphs": [
          "From the interviews, observations and reviews, the following key problems were identified.",
          "Inadequate Availability of Appropriate Laboratory Personnel",
          "The assessment identified limited availability of appropriately qualified laboratory personnel as one of the impediments affecting laboratory service delivery at the Primary Health Care Centre. The facility had Medical Laboratory Technicians but did not have a Medical Laboratory Scientist.",
          "This limitation may affect the facility's capacity to provide and oversee a broader range of laboratory investigations and may restrict access to services requiring higher levels of professional expertise, result interpretation, quality assurance and specialized technical knowledge.",
          "Inadequacy of Laboratory Resources",
          "The assessment also identified limitations in available laboratory resources. The need for additional equipment prompted the team to support the facilities through targeted laboratory interventions.",
          "A haemoglobin electrophoresis machine was provided to the Primary Health Care Centre, while a microhaematocrit reader was procured and handed over to the ECWA facility. These interventions were intended to strengthen laboratory capacity and improve the availability of diagnostic services within the community.",
          "Inadequate laboratory equipment can limit the range of investigations that a facility can perform. When required equipment is unavailable, patients may have to seek testing elsewhere, which can contribute to delays in diagnosis, additional expenses and dependence on external laboratories.",
          "Low Utilization of Laboratory Services",
          "The assessment revealed low utilization of laboratory services within the facilities. The laboratory was reported to attend to approximately two patients per day.",
          "Low utilization limits the contribution of laboratory investigations to diagnosis, treatment decisions and disease monitoring. It may also reflect inadequate awareness among community members regarding the availability and importance of laboratory services.",
          "The team therefore identified the need for continuous laboratory-service advocacy and community health education. During community sensitization and health outreach activities, the team encouraged residents to make appropriate use of available laboratory services and emphasized the importance of genotype testing, particularly among individuals of marriageable age and prospective couples.",
          "Limitations in Record Keeping",
          "The assessment also identified limitations in record-keeping practices within the healthcare facilities.",
          "Proper record keeping supports continuity of care by providing information on previous investigations, diagnoses, treatments and follow-up. It also assists healthcare workers in monitoring disease patterns, evaluating services and planning healthcare interventions.",
          "Within laboratory services, accurate documentation of investigations and results is particularly important because laboratory records provide evidence of tests performed and results generated.",
          "Limitations in record keeping may therefore affect the retrieval of patient information, continuity of care, accountability and efficient management of healthcare services. Strengthening documentation practices would improve the organization and continuity of services within the facilities.",
          "Limited Capacity for Specialized Laboratory Investigations",
          "The availability of qualified personnel and appropriate equipment determines the range of laboratory investigations that a healthcare facility can provide.",
          "At the Primary Health Care Centre, the absence of a Medical Laboratory Scientist, together with limitations in available laboratory resources, may restrict the facility's capacity to provide certain specialized investigations locally.",
          "The provision and commissioning of the haemoglobin electrophoresis machine addressed part of this limitation by improving the facility's capacity to perform haemoglobin-related investigations. This intervention also supported the team's community genotype-awareness activities.",
          "During the outreach and community sensitization programmes, the team encouraged residents to access appropriate laboratory services and emphasized genotype testing for individuals of marriageable age and prospective couples.",
          "Effects of Provider- and Facility-Related Impediments on Healthcare Delivery",
          "The identified limitations have direct implications for healthcare delivery in Shao Community.",
          "Inadequate availability of appropriately qualified laboratory personnel may restrict the range and effective supervision of laboratory services. Similarly, inadequate equipment may limit the investigations that healthcare facilities can perform and may result in referrals or delays when patients require investigations that are not available locally.",
          "Low utilization of laboratory services reduces opportunities for laboratory-supported diagnosis and informed clinical decision-making. Limitations in record keeping may also affect the retrieval of patient information and continuity of care."
        ]
      },
      {
        "heading": "Measures Taken By The Cobes Team",
        "paragraphs": [
          "The COBES team implemented several interventions in response to the deficiencies identified during the assessment.",
          "A haemoglobin electrophoresis machine was procured and delivered to the Primary Health Care Centre. Although the team could not commission the machine during the initial visit because the appropriate laboratory personnel was unavailable, the team returned on 17 August 2026 and successfully commissioned the equipment.",
          "The team also procured and handed over a microhaematocrit reader to the ECWA facility to strengthen its laboratory capacity.",
          "Beyond equipment provision, the team incorporated laboratory-service advocacy into its community sensitization and health outreach activities. Residents were encouraged to use appropriate laboratory services and seek healthcare from qualified healthcare professionals. The team also emphasized genotype testing, particularly among individuals of marriageable age and prospective couples.",
          "These interventions demonstrate the COBES approach of identifying facility-level deficiencies and mobilizing resources to address practical gaps affecting healthcare and laboratory service delivery."
        ]
      },
      {
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on the findings of the assessment, the following measures are recommended:",
          "Recruitment and deployment of appropriate laboratory personnel: Relevant health authorities should improve the availability of qualified laboratory professionals, including Medical Laboratory Scientists, within community healthcare facilities.",
          "Provision of essential laboratory equipment: Healthcare facilities should receive appropriate and functional laboratory equipment based on identified service needs and the investigations required by the population.",
          "Ensure personnel availability before equipment deployment: Future equipment interventions should consider the availability of trained personnel, consumables, maintenance arrangements and other operational requirements before installation and handover.",
          "Strengthen laboratory-service utilization: Healthcare workers should continue to educate patients and community members on the importance of appropriate laboratory investigations in supporting diagnosis and treatment.",
          "Improve record-keeping practices: Healthcare and laboratory personnel should maintain complete, accurate and accessible records of patient visits, investigations and results to improve continuity of care and accountability.",
          "Expand the range of available diagnostic services: Healthcare facilities should gradually strengthen their diagnostic capacity according to community needs to reduce unnecessary referrals and delays in obtaining laboratory results.",
          "Maintain laboratory advocacy within the community: Community sensitization should continue through outreaches, schools, religious institutions and other community structures to improve awareness and appropriate use of laboratory services.",
          "Provide continuous professional development: Healthcare and laboratory personnel should receive relevant training and continuing professional development to improve service quality and ensure effective use of available equipment."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "The assessment of healthcare facilities and service providers in Shao Community identified several provider- and facility-related impediments affecting the delivery of satisfactory healthcare. These included inadequate availability of appropriately qualified laboratory personnel, limitations in laboratory resources, low utilization of laboratory services, limitations in record keeping and restricted capacity for certain specialized laboratory investigations.",
          "The COBES team responded to some of these identified gaps through the provision of a haemoglobin electrophoresis machine to the Primary Health Care Centre, a microhaematocrit reader to the ECWA facility, and community advocacy on appropriate utilization of laboratory services."
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Introduction",
        "paragraphs": [
          "The presence of healthcare facilities and health service providers within a community does not automatically guarantee access to satisfactory healthcare. The quality and effectiveness of healthcare delivery depend on the availability of qualified personnel, functional equipment, appropriate diagnostic services, adequate documentation, efficient service delivery and the capacity of healthcare facilities to meet the needs of the population.",
          "As part of the COBES programme in Shao Community, the team assessed healthcare facilities within the community, including the ECWA Clinic and the Primary Health Care Centre, Shao. The assessment involved direct observation of facility operations, interaction with healthcare workers and evaluation of available resources. Particular attention was given to the laboratory units, where the team assessed available personnel, equipment, investigations performed, record keeping and general laboratory practices.",
          "The assessment identified several provider- and facility-related impediments that may limit the ability of the healthcare facilities to provide satisfactory and comprehensive services to residents of Shao Community."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Facility Barriers — field overview",
        "src": "",
        "poster": "",
        "alt": "Facility Barriers — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Objectives",
        "paragraphs": [
          "The objectives of the assessment were to:",
          "Assess the capacity of healthcare facilities and service providers to deliver satisfactory healthcare services.",
          "Identify limitations related to healthcare personnel, equipment and diagnostic resources.",
          "Assess the availability and utilization of laboratory services within the facilities.",
          "Examine record-keeping practices and other factors affecting healthcare service delivery.",
          "Identify how provider- and facility-related limitations affect access to appropriate healthcare.",
          "Identify practical interventions that can strengthen healthcare and laboratory service delivery within the community."
        ]
      },
      {
        "kind": "content",
        "heading": "Methodology",
        "paragraphs": [
          "An assessment was conducted as part of the COBES programme to evaluate the healthcare facilities available in Shao Community and assess their capacity to provide clinical and laboratory services."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Facility Barriers — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Facility Barriers — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Study Design",
        "paragraphs": [
          "A descriptive facility-based assessment was conducted as part of the COBES programme in Shao Community.",
          "Verbal consent was obtained for the study in lieu of ethical considerations."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Facility Barriers — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Facility Barriers — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Approach",
        "paragraphs": [
          "The team visited healthcare facilities within the community, including the ECWA Clinic and the Primary Health Care Centre, Shao. During the visits, team members interacted with healthcare workers and observed the general operations of the facilities.",
          "The assessment covered interviews with various healthcare personnel, facility observation checklist including available equipment and resources, laboratory investigations, laboratory practices, record keeping and the general capacity of the facilities to provide healthcare services and also documents and records review.",
          "The team also identified gaps requiring intervention and considered their implications for healthcare and laboratory service delivery."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Facility Barriers — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Facility Barriers — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Results",
        "paragraphs": [
          "From the interviews, observations and reviews, the following key problems were identified.",
          "Inadequate Availability of Appropriate Laboratory Personnel",
          "The assessment identified limited availability of appropriately qualified laboratory personnel as one of the impediments affecting laboratory service delivery at the Primary Health Care Centre. The facility had Medical Laboratory Technicians but did not have a Medical Laboratory Scientist.",
          "This limitation may affect the facility's capacity to provide and oversee a broader range of laboratory investigations and may restrict access to services requiring higher levels of professional expertise, result interpretation, quality assurance and specialized technical knowledge.",
          "Inadequacy of Laboratory Resources",
          "The assessment also identified limitations in available laboratory resources. The need for additional equipment prompted the team to support the facilities through targeted laboratory interventions.",
          "A haemoglobin electrophoresis machine was provided to the Primary Health Care Centre, while a microhaematocrit reader was procured and handed over to the ECWA facility. These interventions were intended to strengthen laboratory capacity and improve the availability of diagnostic services within the community.",
          "Inadequate laboratory equipment can limit the range of investigations that a facility can perform. When required equipment is unavailable, patients may have to seek testing elsewhere, which can contribute to delays in diagnosis, additional expenses and dependence on external laboratories.",
          "Low Utilization of Laboratory Services",
          "The assessment revealed low utilization of laboratory services within the facilities. The laboratory was reported to attend to approximately two patients per day.",
          "Low utilization limits the contribution of laboratory investigations to diagnosis, treatment decisions and disease monitoring. It may also reflect inadequate awareness among community members regarding the availability and importance of laboratory services.",
          "The team therefore identified the need for continuous laboratory-service advocacy and community health education. During community sensitization and health outreach activities, the team encouraged residents to make appropriate use of available laboratory services and emphasized the importance of genotype testing, particularly among individuals of marriageable age and prospective couples.",
          "Limitations in Record Keeping",
          "The assessment also identified limitations in record-keeping practices within the healthcare facilities.",
          "Proper record keeping supports continuity of care by providing information on previous investigations, diagnoses, treatments and follow-up. It also assists healthcare workers in monitoring disease patterns, evaluating services and planning healthcare interventions.",
          "Within laboratory services, accurate documentation of investigations and results is particularly important because laboratory records provide evidence of tests performed and results generated.",
          "Limitations in record keeping may therefore affect the retrieval of patient information, continuity of care, accountability and efficient management of healthcare services. Strengthening documentation practices would improve the organization and continuity of services within the facilities.",
          "Limited Capacity for Specialized Laboratory Investigations",
          "The availability of qualified personnel and appropriate equipment determines the range of laboratory investigations that a healthcare facility can provide.",
          "At the Primary Health Care Centre, the absence of a Medical Laboratory Scientist, together with limitations in available laboratory resources, may restrict the facility's capacity to provide certain specialized investigations locally.",
          "The provision and commissioning of the haemoglobin electrophoresis machine addressed part of this limitation by improving the facility's capacity to perform haemoglobin-related investigations. This intervention also supported the team's community genotype-awareness activities.",
          "During the outreach and community sensitization programmes, the team encouraged residents to access appropriate laboratory services and emphasized genotype testing for individuals of marriageable age and prospective couples.",
          "Effects of Provider- and Facility-Related Impediments on Healthcare Delivery",
          "The identified limitations have direct implications for healthcare delivery in Shao Community.",
          "Inadequate availability of appropriately qualified laboratory personnel may restrict the range and effective supervision of laboratory services. Similarly, inadequate equipment may limit the investigations that healthcare facilities can perform and may result in referrals or delays when patients require investigations that are not available locally.",
          "Low utilization of laboratory services reduces opportunities for laboratory-supported diagnosis and informed clinical decision-making. Limitations in record keeping may also affect the retrieval of patient information and continuity of care."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Facility Barriers — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Facility Barriers — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Measures Taken By The Cobes Team",
        "paragraphs": [
          "The COBES team implemented several interventions in response to the deficiencies identified during the assessment.",
          "A haemoglobin electrophoresis machine was procured and delivered to the Primary Health Care Centre. Although the team could not commission the machine during the initial visit because the appropriate laboratory personnel was unavailable, the team returned on 17 August 2026 and successfully commissioned the equipment.",
          "The team also procured and handed over a microhaematocrit reader to the ECWA facility to strengthen its laboratory capacity.",
          "Beyond equipment provision, the team incorporated laboratory-service advocacy into its community sensitization and health outreach activities. Residents were encouraged to use appropriate laboratory services and seek healthcare from qualified healthcare professionals. The team also emphasized genotype testing, particularly among individuals of marriageable age and prospective couples.",
          "These interventions demonstrate the COBES approach of identifying facility-level deficiencies and mobilizing resources to address practical gaps affecting healthcare and laboratory service delivery."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Facility Barriers — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Facility Barriers — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on the findings of the assessment, the following measures are recommended:",
          "Recruitment and deployment of appropriate laboratory personnel: Relevant health authorities should improve the availability of qualified laboratory professionals, including Medical Laboratory Scientists, within community healthcare facilities.",
          "Provision of essential laboratory equipment: Healthcare facilities should receive appropriate and functional laboratory equipment based on identified service needs and the investigations required by the population.",
          "Ensure personnel availability before equipment deployment: Future equipment interventions should consider the availability of trained personnel, consumables, maintenance arrangements and other operational requirements before installation and handover.",
          "Strengthen laboratory-service utilization: Healthcare workers should continue to educate patients and community members on the importance of appropriate laboratory investigations in supporting diagnosis and treatment.",
          "Improve record-keeping practices: Healthcare and laboratory personnel should maintain complete, accurate and accessible records of patient visits, investigations and results to improve continuity of care and accountability.",
          "Expand the range of available diagnostic services: Healthcare facilities should gradually strengthen their diagnostic capacity according to community needs to reduce unnecessary referrals and delays in obtaining laboratory results.",
          "Maintain laboratory advocacy within the community: Community sensitization should continue through outreaches, schools, religious institutions and other community structures to improve awareness and appropriate use of laboratory services.",
          "Provide continuous professional development: Healthcare and laboratory personnel should receive relevant training and continuing professional development to improve service quality and ensure effective use of available equipment."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "The assessment of healthcare facilities and service providers in Shao Community identified several provider- and facility-related impediments affecting the delivery of satisfactory healthcare. These included inadequate availability of appropriately qualified laboratory personnel, limitations in laboratory resources, low utilization of laboratory services, limitations in record keeping and restricted capacity for certain specialized laboratory investigations.",
          "The COBES team responded to some of these identified gaps through the provision of a haemoglobin electrophoresis machine to the Primary Health Care Centre, a microhaematocrit reader to the ECWA facility, and community advocacy on appropriate utilization of laboratory services."
        ]
      }
    ]
  },
  {
    "id": "mlo-04",
    "source": "General MLO 4",
    "title": "Sector Involvement",
    "kind": "general",
    "objective": "To Assess The Level Of Government And Private Sector Involvement In Health Provison In The Community",
    "sections": [
      {
        "heading": "Introduction",
        "paragraphs": [
          "Healthcare provision within a community requires the participation of different sectors, including government institutions, private and non-governmental healthcare providers, community leaders, religious institutions and other stakeholders. The government provides an important foundation for healthcare delivery through the establishment and operation of healthcare facilities, deployment of personnel, provision of resources and implementation of health programmes. Private and non-governmental providers complement these efforts by providing additional healthcare and diagnostic services.",
          "As part of the COBES programme in Shao Community, the team assessed the involvement of government and private/non-governmental sectors in healthcare provision. The assessment focused on healthcare facilities, available services and resources, healthcare personnel, laboratory services and the roles played by different stakeholders in supporting healthcare activities within the community."
        ]
      },
      {
        "heading": "Objectives",
        "paragraphs": [
          "The objectives of the assessment were to:",
          "Assess the level of government involvement in healthcare provision within Shao Community.",
          "Identify the contributions of private and non-governmental healthcare providers.",
          "Assess the availability of healthcare and laboratory services provided by different sectors.",
          "Examine the level of collaboration between healthcare providers and community stakeholders.",
          "Identify gaps in government and private-sector participation in healthcare delivery.",
          "Identify ways of strengthening collaboration among relevant stakeholders to improve healthcare provision."
        ]
      },
      {
        "heading": "Methodology",
        "paragraphs": [
          "An assessment was conducted as part of the COBES programme to evaluate the level of government and private sector involvement in Shao Community and assess their capacity to aid the health centres in proviison of clinical and laboratory services."
        ]
      },
      {
        "heading": "Approach",
        "paragraphs": [
          "A descriptive facility- and community-based assessment was conducted as part of the COBES programme in Shao Community.",
          "The team visited government-supported and non-governmental healthcare facilities within the community, including the Primary Health Care Centre, Shao and the ECWA Clinic. The team interacted with healthcare workers, assessed available services and resources, observed facility operations and examined the role of different stakeholders in healthcare provision.",
          "The team also engaged traditional and religious leaders during courtesy visits, health education activities and community mobilization programmes. Information obtained from these interactions, facility assessments and activities conducted during the COBES programme was used to assess the level of sectoral involvement in healthcare provision."
        ]
      },
      {
        "heading": "Results",
        "paragraphs": [
          "From the interviews, observations and reviews, the following inferences were drawn.",
          "Government Involvement in Healthcare Provision.",
          "Government involvement in healthcare provision was primarily demonstrated through the operation of the Primary Health Care Centre in Shao.",
          "The team assessed the facility's general operations, healthcare personnel, available equipment, laboratory services, working conditions and record-keeping practices. Interaction with healthcare workers also provided information on the common health challenges encountered by residents and some of the limitations affecting service delivery.",
          "These activities demonstrate the important role of government-supported primary healthcare facilities in providing healthcare services and supporting community-based health interventions.",
          "Government Support for Laboratory Services",
          "Government-supported healthcare facilities also contributed to the provision of Medical Laboratory Services within the community.",
          "Private and Non-Governmental Sector Involvement",
          "The private/non-governmental sector was represented by the ECWA Clinic within Shao Community.",
          "The COBES team was posted to the facility to assess its healthcare services, personnel, laboratory resources, investigations performed, working conditions and general operations.",
          "The ECWA Clinic provides residents with an additional avenue for accessing healthcare and laboratory services. Its presence therefore complements the services provided by government-supported healthcare facilities.",
          "These activities conducted during the COBES programme demonstrated the participation of government and non-governmental stakeholders in healthcare provision.",
          "Government-supported facilities contributed through:",
          "Provision of primary healthcare services.",
          "Provision of laboratory services.",
          "Health screening and counselling.",
          "Provision of facilities for community health activities.",
          "Receipt and utilization of healthcare equipment.",
          "The ECWA Clinic contributed by providing healthcare and laboratory services to community members."
        ]
      },
      {
        "heading": "Level Of Government And Private-Sector Involvement",
        "paragraphs": [
          "Based on the team's observations, government involvement in healthcare provision within Shao Community was substantial, particularly at the primary healthcare level. Government-supported facilities provided important healthcare and laboratory services and served as points of care for residents.",
          "The private/non-governmental sector also made a meaningful contribution through the ECWA Clinic, which provided additional healthcare and laboratory services.",
          "However, the assessment identified areas requiring further strengthening. The need for additional laboratory equipment, structural renovations to personnel availability demonstrated gaps in human and material resources.",
          "Therefore, although both sectors contribute to healthcare provision, continued investment in personnel, equipment, infrastructure and collaboration remains necessary to improve the quality and coverage of healthcare services."
        ]
      },
      {
        "heading": "Challenges Identified",
        "paragraphs": [
          "The assessment identified limitations that could affect the effectiveness of healthcare provision.",
          "One notable challenge involved the availability of appropriate personnel to operate or commission laboratory equipment. The team initially postponed commissioning of the electrophoresis machine because the appropriate laboratory personnel was unavailable.",
          "The facility assessments also demonstrated the need for adequate laboratory equipment and human resources. Without sufficient personnel and material resources, healthcare facilities may have limited capacity to provide comprehensive healthcare and diagnostic services.",
          "These findings emphasize the need for continued investment in both human and material resources across healthcare facilities."
        ]
      },
      {
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on the assessment, the following recommendations are proposed:",
          "The government should continue to strengthen primary healthcare facilities through the provision of appropriate infrastructure, equipment, consumables and other essential resources.",
          "Relevant authorities should ensure adequate deployment of healthcare and laboratory personnel to enable facilities to utilize available resources effectively.",
          "Medical Laboratory Services should be strengthened through the provision of appropriate equipment, qualified personnel, reagents and regular equipment maintenance.",
          "Private and non-governmental healthcare providers should continue to complement government efforts by providing accessible and quality healthcare services.",
          "Government and private/non-governmental healthcare providers should strengthen collaboration to improve healthcare coverage and reduce gaps in service delivery.",
          "Traditional, religious and community leaders should remain actively involved in health promotion, community mobilization and implementation of health interventions.",
          "Regular community health programmes should be encouraged to promote disease prevention, early detection, health education and appropriate referral.",
          "Community participation should be strengthened to ensure that residents contribute to identifying health needs and supporting sustainable healthcare interventions."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "The assessment demonstrated that both government and private/non-governmental sectors contribute to healthcare provision in Shao Community. Government involvement was mainly demonstrated through the operation of primary healthcare facilities and the provision of healthcare and laboratory services, while the ECWA Clinic represented an important non-governmental contribution.",
          "The COBES programme also demonstrated the importance of collaboration among healthcare providers, traditional institutions, religious organizations and community stakeholders. Through health outreaches, health education, laboratory advocacy, equipment support, community mobilization and referral, the team complemented existing healthcare services.",
          "Despite the contributions of both sectors, further strengthening of healthcare infrastructure, human resources, laboratory services, equipment and inter-sectoral collaboration remains necessary to improve the accessibility, quality and effectiveness of healthcare services in Shao Community."
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Introduction",
        "paragraphs": [
          "Healthcare provision within a community requires the participation of different sectors, including government institutions, private and non-governmental healthcare providers, community leaders, religious institutions and other stakeholders. The government provides an important foundation for healthcare delivery through the establishment and operation of healthcare facilities, deployment of personnel, provision of resources and implementation of health programmes. Private and non-governmental providers complement these efforts by providing additional healthcare and diagnostic services.",
          "As part of the COBES programme in Shao Community, the team assessed the involvement of government and private/non-governmental sectors in healthcare provision. The assessment focused on healthcare facilities, available services and resources, healthcare personnel, laboratory services and the roles played by different stakeholders in supporting healthcare activities within the community."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Sector Involvement — field overview",
        "src": "",
        "poster": "",
        "alt": "Sector Involvement — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Objectives",
        "paragraphs": [
          "The objectives of the assessment were to:",
          "Assess the level of government involvement in healthcare provision within Shao Community.",
          "Identify the contributions of private and non-governmental healthcare providers.",
          "Assess the availability of healthcare and laboratory services provided by different sectors.",
          "Examine the level of collaboration between healthcare providers and community stakeholders.",
          "Identify gaps in government and private-sector participation in healthcare delivery.",
          "Identify ways of strengthening collaboration among relevant stakeholders to improve healthcare provision."
        ]
      },
      {
        "kind": "content",
        "heading": "Methodology",
        "paragraphs": [
          "An assessment was conducted as part of the COBES programme to evaluate the level of government and private sector involvement in Shao Community and assess their capacity to aid the health centres in proviison of clinical and laboratory services."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Sector Involvement — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Sector Involvement — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Approach",
        "paragraphs": [
          "A descriptive facility- and community-based assessment was conducted as part of the COBES programme in Shao Community.",
          "The team visited government-supported and non-governmental healthcare facilities within the community, including the Primary Health Care Centre, Shao and the ECWA Clinic. The team interacted with healthcare workers, assessed available services and resources, observed facility operations and examined the role of different stakeholders in healthcare provision.",
          "The team also engaged traditional and religious leaders during courtesy visits, health education activities and community mobilization programmes. Information obtained from these interactions, facility assessments and activities conducted during the COBES programme was used to assess the level of sectoral involvement in healthcare provision."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Sector Involvement — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Sector Involvement — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Results",
        "paragraphs": [
          "From the interviews, observations and reviews, the following inferences were drawn.",
          "Government Involvement in Healthcare Provision.",
          "Government involvement in healthcare provision was primarily demonstrated through the operation of the Primary Health Care Centre in Shao.",
          "The team assessed the facility's general operations, healthcare personnel, available equipment, laboratory services, working conditions and record-keeping practices. Interaction with healthcare workers also provided information on the common health challenges encountered by residents and some of the limitations affecting service delivery.",
          "These activities demonstrate the important role of government-supported primary healthcare facilities in providing healthcare services and supporting community-based health interventions.",
          "Government Support for Laboratory Services",
          "Government-supported healthcare facilities also contributed to the provision of Medical Laboratory Services within the community.",
          "Private and Non-Governmental Sector Involvement",
          "The private/non-governmental sector was represented by the ECWA Clinic within Shao Community.",
          "The COBES team was posted to the facility to assess its healthcare services, personnel, laboratory resources, investigations performed, working conditions and general operations.",
          "The ECWA Clinic provides residents with an additional avenue for accessing healthcare and laboratory services. Its presence therefore complements the services provided by government-supported healthcare facilities.",
          "These activities conducted during the COBES programme demonstrated the participation of government and non-governmental stakeholders in healthcare provision.",
          "Government-supported facilities contributed through:",
          "Provision of primary healthcare services.",
          "Provision of laboratory services.",
          "Health screening and counselling.",
          "Provision of facilities for community health activities.",
          "Receipt and utilization of healthcare equipment.",
          "The ECWA Clinic contributed by providing healthcare and laboratory services to community members."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Sector Involvement — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Sector Involvement — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Level Of Government And Private-Sector Involvement",
        "paragraphs": [
          "Based on the team's observations, government involvement in healthcare provision within Shao Community was substantial, particularly at the primary healthcare level. Government-supported facilities provided important healthcare and laboratory services and served as points of care for residents.",
          "The private/non-governmental sector also made a meaningful contribution through the ECWA Clinic, which provided additional healthcare and laboratory services.",
          "However, the assessment identified areas requiring further strengthening. The need for additional laboratory equipment, structural renovations to personnel availability demonstrated gaps in human and material resources.",
          "Therefore, although both sectors contribute to healthcare provision, continued investment in personnel, equipment, infrastructure and collaboration remains necessary to improve the quality and coverage of healthcare services."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Sector Involvement — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Sector Involvement — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Challenges Identified",
        "paragraphs": [
          "The assessment identified limitations that could affect the effectiveness of healthcare provision.",
          "One notable challenge involved the availability of appropriate personnel to operate or commission laboratory equipment. The team initially postponed commissioning of the electrophoresis machine because the appropriate laboratory personnel was unavailable.",
          "The facility assessments also demonstrated the need for adequate laboratory equipment and human resources. Without sufficient personnel and material resources, healthcare facilities may have limited capacity to provide comprehensive healthcare and diagnostic services.",
          "These findings emphasize the need for continued investment in both human and material resources across healthcare facilities."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Sector Involvement — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Sector Involvement — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on the assessment, the following recommendations are proposed:",
          "The government should continue to strengthen primary healthcare facilities through the provision of appropriate infrastructure, equipment, consumables and other essential resources.",
          "Relevant authorities should ensure adequate deployment of healthcare and laboratory personnel to enable facilities to utilize available resources effectively.",
          "Medical Laboratory Services should be strengthened through the provision of appropriate equipment, qualified personnel, reagents and regular equipment maintenance.",
          "Private and non-governmental healthcare providers should continue to complement government efforts by providing accessible and quality healthcare services.",
          "Government and private/non-governmental healthcare providers should strengthen collaboration to improve healthcare coverage and reduce gaps in service delivery.",
          "Traditional, religious and community leaders should remain actively involved in health promotion, community mobilization and implementation of health interventions.",
          "Regular community health programmes should be encouraged to promote disease prevention, early detection, health education and appropriate referral.",
          "Community participation should be strengthened to ensure that residents contribute to identifying health needs and supporting sustainable healthcare interventions."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "The assessment demonstrated that both government and private/non-governmental sectors contribute to healthcare provision in Shao Community. Government involvement was mainly demonstrated through the operation of primary healthcare facilities and the provision of healthcare and laboratory services, while the ECWA Clinic represented an important non-governmental contribution.",
          "The COBES programme also demonstrated the importance of collaboration among healthcare providers, traditional institutions, religious organizations and community stakeholders. Through health outreaches, health education, laboratory advocacy, equipment support, community mobilization and referral, the team complemented existing healthcare services.",
          "Despite the contributions of both sectors, further strengthening of healthcare infrastructure, human resources, laboratory services, equipment and inter-sectoral collaboration remains necessary to improve the accessibility, quality and effectiveness of healthcare services in Shao Community."
        ]
      }
    ]
  },
  {
    "id": "mlo-05",
    "source": "General MLO 5",
    "title": "Health Sensitization",
    "kind": "general",
    "objective": "To Sensitize The People And Community On The Importance And Proactive Measures To Facilitate Health",
    "sections": [
      {
        "heading": "Introduction",
        "paragraphs": [
          "Health education enables individuals and communities to understand health risks, adopt preventive practices, recognize early symptoms and make appropriate decisions concerning their health. In fulfilment of General MLO 5, the COBES team conducted several sensitization and health-promotion activities among residents of Shao Community.",
          "The team delivered health education through community awareness campaigns, religious gatherings, school-based sensitization, health outreaches, environmental sanitation activities and direct interaction with residents. Major topics addressed included malaria, typhoid, hepatitis, tuberculosis, personal hygiene, environmental sanitation, appropriate healthcare-seeking behaviour and the importance of utilizing Medical Laboratory Services."
        ]
      },
      {
        "heading": "Objectives",
        "paragraphs": [
          "The sensitization activities aimed to:",
          "Improve community awareness of common health conditions.",
          "Educate residents on practical disease-prevention measures.",
          "Promote timely and appropriate healthcare-seeking behaviour.",
          "Discourage inappropriate self-medication and reliance on unqualified healthcare providers.",
          "Promote the utilization of available healthcare and laboratory services.",
          "Create awareness about genotype testing, particularly among individuals of marriageable age and prospective couples.",
          "Encourage good personal and environmental hygiene.",
          "Promote community participation in health programmes.",
          "Encourage residents to adopt preventive health practices."
        ]
      },
      {
        "heading": "Methodology",
        "paragraphs": [
          "A community-based health education and sensitization approach was adopted as part of the COBES programme to promote health awareness, disease prevention, and appropriate health practices among residents of Shao Community. The approaches and methods involved direct engagement with different groups within the community and was supported by relevant community stakeholders."
        ]
      },
      {
        "heading": "Study Design",
        "paragraphs": [
          "A descriptive community-based health education and sensitization approach was used during the COBES programme.",
          "The team delivered health information through direct community interaction, public-address announcements, religious gatherings, school sensitization, health outreaches and environmental sanitation activities. Traditional, religious and community leaders also supported community mobilization.",
          "The team combined health education with practical interventions such as screening, counselling, referral, distribution of insecticide-treated mosquito nets and environmental sanitation."
        ]
      },
      {
        "heading": "Results",
        "paragraphs": [
          "Community-Wide Health Awareness Campaign",
          "The team conducted a community-wide health awareness campaign across different areas of Shao Community. Members interacted directly with residents and used a public-address system to reach a wider audience.",
          "The campaign focused mainly on malaria and typhoid. Residents received information about common signs and symptoms, preventive measures and the importance of seeking appropriate medical attention when symptoms developed.",
          "The campaign also mobilized residents for the health outreach scheduled for the following day by providing information about the venue and services that would be available.",
          "Sensitization at the Mosque",
          "The team used the Friday Juma'ah gathering as an avenue to reach members of the Muslim community.",
          "Following the prayer, team members educated worshippers on malaria and typhoid, including their signs and symptoms, preventive measures and the importance of seeking professional medical care.",
          "The team also informed worshippers about the planned health outreach and encouraged them to participate.",
          "Sensitization Through Church Engagement",
          "The team engaged the Christian community through visits to First ECWA Church and Second ECWA Church.",
          "During the church services, team members educated the congregations on general health issues, with particular emphasis on malaria and typhoid prevention. They also emphasized healthy practices and the importance of seeking medical attention from qualified healthcare professionals.",
          "The churches also served as channels for mobilizing residents for the planned health outreach.",
          "Sensitization on Malaria Prevention",
          "Malaria prevention formed an important component of the team's health education activities.",
          "Residents received information on practical measures for reducing malaria risk and the importance of consistently applying preventive practices.",
          "As part of the team's malaria-prevention intervention, 100 insecticide-treated mosquito nets were distributed to community members during the second health outreach. The beneficiaries received education on the proper and consistent use of the nets.",
          "The combination of health education and provision of preventive materials provided a practical approach to malaria prevention within the community.",
          "Sensitization on Typhoid",
          "The team also addressed typhoid during its sensitization activities.",
          "Residents received information on the signs and symptoms of typhoid, preventive practices and the importance of seeking appropriate medical care.",
          "The team discouraged residents from relying solely on self-medication when symptoms occur and emphasized the importance of seeking appropriate medical attention.",
          "Typhoid screening was also incorporated into the health outreaches, allowing the team to combine health education with screening and counselling.",
          "Sensitization on Hepatitis and Tuberculosis",
          "During the second health outreach, the team expanded its health education activities to include hepatitis and tuberculosis.",
          "Women, men and older members of the community received information on these conditions, their prevention and the importance of seeking appropriate medical care.",
          "Hepatitis screening was also conducted during the outreach, allowing participants to receive both health information and screening services.",
          "Sensitization on Genotype Testing",
          "The team placed particular emphasis on genotype testing during the health outreach.",
          "Individuals of marriageable age and prospective couples were encouraged to know their genotype and utilize the laboratory services available at the Primary Health Care Centre.",
          "The sensitization emphasized the role of laboratory testing in informed health decision-making and encouraged residents to make appropriate use of available Medical Laboratory Services.",
          "Promotion of Appropriate Healthcare-Seeking Behaviour",
          "The team consistently emphasized the importance of seeking healthcare from qualified healthcare professionals.",
          "Residents were encouraged to visit appropriate healthcare facilities whenever they experienced symptoms or had health concerns. The team also discouraged inappropriate self-medication and indiscriminate use of unprescribed medications.",
          "Individuals with abnormal or concerning screening results during the outreach were referred to the Primary Health Care Centres and other nearby healthcare facilities for further assessment, treatment and follow-up.",
          "Sensitization on Personal and Environmental Health",
          "The team incorporated environmental health education into its sanitation activities.",
          "During the sanitation exercise from the hostel to the incinerator site at Isale Oja, residents received education on proper waste disposal and environmental cleanliness.",
          "The team encouraged residents to:",
          "Use the available incinerator appropriately.",
          "Avoid indiscriminate disposal of refuse.",
          "Avoid dumping waste in drainage channels.",
          "Avoid disposing of refuse in water sources and bushes.",
          "Maintain a clean and healthy environment.",
          "The activity reinforced the importance of environmental conditions in maintaining community health.",
          "Sensitization During the Health Outreach",
          "The health outreaches provided an opportunity to combine health education with screening, counselling, prevention and referral.",
          "During the second outreach at the Primary Health Care Centre, Isale Oja, residents received screening for:",
          "Malaria",
          "Typhoid",
          "Hepatitis B Virus",
          "Blood grouping",
          "Participants received counselling based on the services provided and were educated on appropriate healthcare-seeking behaviour.",
          "The team also sensitized secondary school students on Medical Laboratory Science, the role of Medical Laboratory Scientists in healthcare, personal hygiene and general health practices. Exercise books were distributed to the students as part of the team's educational support initiative.",
          "Methods Used for Community Sensitization",
          "The team used several approaches to reach different groups within the community. These included:",
          "Direct interaction with residents.",
          "Public-address announcements during community awareness campaigns.",
          "Health education during mosque gatherings.",
          "Health education during church services.",
          "School-based health sensitization.",
          "Health education during outreach programmes.",
          "Environmental sanitation accompanied by health education.",
          "Community mobilization through traditional and religious institutions.",
          "Direct interaction with healthcare workers and community members.",
          "Using multiple approaches enabled the team to reach residents in different social and community settings.",
          "Outcomes of the Sensitization Activities",
          "The sensitization activities enabled the team to engage directly with residents and address relevant health concerns.",
          "The activities helped to:",
          "Improve awareness of common health conditions.",
          "Promote disease-prevention practices.",
          "Encourage appropriate healthcare-seeking behaviour.",
          "Increase awareness of available healthcare and laboratory services.",
          "Promote genotype testing among individuals of marriageable age and prospective couples.",
          "Support malaria prevention through the distribution of 100 insecticide-treated mosquito nets.",
          "Promote personal and environmental hygiene.",
          "Encourage participation in health outreaches.",
          "Provide opportunities for screening, counselling and referral.",
          "The combination of health education with practical interventions strengthened the team's contribution to health promotion within Shao Community."
        ]
      },
      {
        "heading": "Challenges Encountered",
        "paragraphs": [
          "The team had to engage residents across different locations and social groups, which required the use of different communication approaches to effectively disseminate health information.",
          "The assessment of the previously constructed incinerator at Isale Oja also revealed inadequate awareness among some community members about its purpose and appropriate use. This finding demonstrated that health and community-development projects require continuous education, community ownership and follow-up to achieve sustained utilization."
        ]
      },
      {
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on the sensitization activities conducted, the following recommendations are proposed:",
          "Regular health education programmes should be organized to reinforce health knowledge within the community.",
          "Religious institutions should continue to serve as channels for disseminating relevant health information.",
          "Schools should be incorporated into community health education, particularly on personal hygiene and disease prevention.",
          "Healthcare facilities should integrate health education into routine patient care and community services.",
          "Traditional and community leaders should continue to support health promotion and community mobilization.",
          "Health education should be combined with practical interventions such as screening, counselling, referral, sanitation activities and distribution of preventive materials where appropriate.",
          "Residents should be encouraged to seek care from qualified healthcare professionals and utilize available laboratory services appropriately.",
          "Community projects should include adequate education, community participation and follow-up to promote proper utilization and long-term sustainability."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "The COBES team carried out several health sensitization and health-promotion activities in Shao Community in fulfilment of General MLO 5. Through community awareness campaigns, religious engagements, school sensitization, environmental sanitation and health outreaches, the team educated residents on disease prevention, personal hygiene, appropriate healthcare-seeking behaviour and the importance of utilizing available healthcare and laboratory services.",
          "The activities combined health education with practical interventions, including screening, counselling, referral, distribution of 100 insecticide-treated mosquito nets and environmental sanitation"
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Introduction",
        "paragraphs": [
          "Health education enables individuals and communities to understand health risks, adopt preventive practices, recognize early symptoms and make appropriate decisions concerning their health. In fulfilment of General MLO 5, the COBES team conducted several sensitization and health-promotion activities among residents of Shao Community.",
          "The team delivered health education through community awareness campaigns, religious gatherings, school-based sensitization, health outreaches, environmental sanitation activities and direct interaction with residents. Major topics addressed included malaria, typhoid, hepatitis, tuberculosis, personal hygiene, environmental sanitation, appropriate healthcare-seeking behaviour and the importance of utilizing Medical Laboratory Services."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Health Sensitization — field overview",
        "src": "",
        "poster": "",
        "alt": "Health Sensitization — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Objectives",
        "paragraphs": [
          "The sensitization activities aimed to:",
          "Improve community awareness of common health conditions.",
          "Educate residents on practical disease-prevention measures.",
          "Promote timely and appropriate healthcare-seeking behaviour.",
          "Discourage inappropriate self-medication and reliance on unqualified healthcare providers.",
          "Promote the utilization of available healthcare and laboratory services.",
          "Create awareness about genotype testing, particularly among individuals of marriageable age and prospective couples.",
          "Encourage good personal and environmental hygiene.",
          "Promote community participation in health programmes.",
          "Encourage residents to adopt preventive health practices."
        ]
      },
      {
        "kind": "content",
        "heading": "Methodology",
        "paragraphs": [
          "A community-based health education and sensitization approach was adopted as part of the COBES programme to promote health awareness, disease prevention, and appropriate health practices among residents of Shao Community. The approaches and methods involved direct engagement with different groups within the community and was supported by relevant community stakeholders."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Health Sensitization — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Health Sensitization — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Study Design",
        "paragraphs": [
          "A descriptive community-based health education and sensitization approach was used during the COBES programme.",
          "The team delivered health information through direct community interaction, public-address announcements, religious gatherings, school sensitization, health outreaches and environmental sanitation activities. Traditional, religious and community leaders also supported community mobilization.",
          "The team combined health education with practical interventions such as screening, counselling, referral, distribution of insecticide-treated mosquito nets and environmental sanitation."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Health Sensitization — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Health Sensitization — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Results",
        "paragraphs": [
          "Community-Wide Health Awareness Campaign",
          "The team conducted a community-wide health awareness campaign across different areas of Shao Community. Members interacted directly with residents and used a public-address system to reach a wider audience.",
          "The campaign focused mainly on malaria and typhoid. Residents received information about common signs and symptoms, preventive measures and the importance of seeking appropriate medical attention when symptoms developed.",
          "The campaign also mobilized residents for the health outreach scheduled for the following day by providing information about the venue and services that would be available.",
          "Sensitization at the Mosque",
          "The team used the Friday Juma'ah gathering as an avenue to reach members of the Muslim community.",
          "Following the prayer, team members educated worshippers on malaria and typhoid, including their signs and symptoms, preventive measures and the importance of seeking professional medical care.",
          "The team also informed worshippers about the planned health outreach and encouraged them to participate.",
          "Sensitization Through Church Engagement",
          "The team engaged the Christian community through visits to First ECWA Church and Second ECWA Church.",
          "During the church services, team members educated the congregations on general health issues, with particular emphasis on malaria and typhoid prevention. They also emphasized healthy practices and the importance of seeking medical attention from qualified healthcare professionals.",
          "The churches also served as channels for mobilizing residents for the planned health outreach.",
          "Sensitization on Malaria Prevention",
          "Malaria prevention formed an important component of the team's health education activities.",
          "Residents received information on practical measures for reducing malaria risk and the importance of consistently applying preventive practices.",
          "As part of the team's malaria-prevention intervention, 100 insecticide-treated mosquito nets were distributed to community members during the second health outreach. The beneficiaries received education on the proper and consistent use of the nets.",
          "The combination of health education and provision of preventive materials provided a practical approach to malaria prevention within the community.",
          "Sensitization on Typhoid",
          "The team also addressed typhoid during its sensitization activities.",
          "Residents received information on the signs and symptoms of typhoid, preventive practices and the importance of seeking appropriate medical care.",
          "The team discouraged residents from relying solely on self-medication when symptoms occur and emphasized the importance of seeking appropriate medical attention.",
          "Typhoid screening was also incorporated into the health outreaches, allowing the team to combine health education with screening and counselling.",
          "Sensitization on Hepatitis and Tuberculosis",
          "During the second health outreach, the team expanded its health education activities to include hepatitis and tuberculosis.",
          "Women, men and older members of the community received information on these conditions, their prevention and the importance of seeking appropriate medical care.",
          "Hepatitis screening was also conducted during the outreach, allowing participants to receive both health information and screening services.",
          "Sensitization on Genotype Testing",
          "The team placed particular emphasis on genotype testing during the health outreach.",
          "Individuals of marriageable age and prospective couples were encouraged to know their genotype and utilize the laboratory services available at the Primary Health Care Centre.",
          "The sensitization emphasized the role of laboratory testing in informed health decision-making and encouraged residents to make appropriate use of available Medical Laboratory Services.",
          "Promotion of Appropriate Healthcare-Seeking Behaviour",
          "The team consistently emphasized the importance of seeking healthcare from qualified healthcare professionals.",
          "Residents were encouraged to visit appropriate healthcare facilities whenever they experienced symptoms or had health concerns. The team also discouraged inappropriate self-medication and indiscriminate use of unprescribed medications.",
          "Individuals with abnormal or concerning screening results during the outreach were referred to the Primary Health Care Centres and other nearby healthcare facilities for further assessment, treatment and follow-up.",
          "Sensitization on Personal and Environmental Health",
          "The team incorporated environmental health education into its sanitation activities.",
          "During the sanitation exercise from the hostel to the incinerator site at Isale Oja, residents received education on proper waste disposal and environmental cleanliness.",
          "The team encouraged residents to:",
          "Use the available incinerator appropriately.",
          "Avoid indiscriminate disposal of refuse.",
          "Avoid dumping waste in drainage channels.",
          "Avoid disposing of refuse in water sources and bushes.",
          "Maintain a clean and healthy environment.",
          "The activity reinforced the importance of environmental conditions in maintaining community health.",
          "Sensitization During the Health Outreach",
          "The health outreaches provided an opportunity to combine health education with screening, counselling, prevention and referral.",
          "During the second outreach at the Primary Health Care Centre, Isale Oja, residents received screening for:",
          "Malaria",
          "Typhoid",
          "Hepatitis B Virus",
          "Blood grouping",
          "Participants received counselling based on the services provided and were educated on appropriate healthcare-seeking behaviour.",
          "The team also sensitized secondary school students on Medical Laboratory Science, the role of Medical Laboratory Scientists in healthcare, personal hygiene and general health practices. Exercise books were distributed to the students as part of the team's educational support initiative.",
          "Methods Used for Community Sensitization",
          "The team used several approaches to reach different groups within the community. These included:",
          "Direct interaction with residents.",
          "Public-address announcements during community awareness campaigns.",
          "Health education during mosque gatherings.",
          "Health education during church services.",
          "School-based health sensitization.",
          "Health education during outreach programmes.",
          "Environmental sanitation accompanied by health education.",
          "Community mobilization through traditional and religious institutions.",
          "Direct interaction with healthcare workers and community members.",
          "Using multiple approaches enabled the team to reach residents in different social and community settings.",
          "Outcomes of the Sensitization Activities",
          "The sensitization activities enabled the team to engage directly with residents and address relevant health concerns.",
          "The activities helped to:",
          "Improve awareness of common health conditions.",
          "Promote disease-prevention practices.",
          "Encourage appropriate healthcare-seeking behaviour.",
          "Increase awareness of available healthcare and laboratory services.",
          "Promote genotype testing among individuals of marriageable age and prospective couples.",
          "Support malaria prevention through the distribution of 100 insecticide-treated mosquito nets.",
          "Promote personal and environmental hygiene.",
          "Encourage participation in health outreaches.",
          "Provide opportunities for screening, counselling and referral.",
          "The combination of health education with practical interventions strengthened the team's contribution to health promotion within Shao Community."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Health Sensitization — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Health Sensitization — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Challenges Encountered",
        "paragraphs": [
          "The team had to engage residents across different locations and social groups, which required the use of different communication approaches to effectively disseminate health information.",
          "The assessment of the previously constructed incinerator at Isale Oja also revealed inadequate awareness among some community members about its purpose and appropriate use. This finding demonstrated that health and community-development projects require continuous education, community ownership and follow-up to achieve sustained utilization."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Health Sensitization — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Health Sensitization — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on the sensitization activities conducted, the following recommendations are proposed:",
          "Regular health education programmes should be organized to reinforce health knowledge within the community.",
          "Religious institutions should continue to serve as channels for disseminating relevant health information.",
          "Schools should be incorporated into community health education, particularly on personal hygiene and disease prevention.",
          "Healthcare facilities should integrate health education into routine patient care and community services.",
          "Traditional and community leaders should continue to support health promotion and community mobilization.",
          "Health education should be combined with practical interventions such as screening, counselling, referral, sanitation activities and distribution of preventive materials where appropriate.",
          "Residents should be encouraged to seek care from qualified healthcare professionals and utilize available laboratory services appropriately.",
          "Community projects should include adequate education, community participation and follow-up to promote proper utilization and long-term sustainability."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "The COBES team carried out several health sensitization and health-promotion activities in Shao Community in fulfilment of General MLO 5. Through community awareness campaigns, religious engagements, school sensitization, environmental sanitation and health outreaches, the team educated residents on disease prevention, personal hygiene, appropriate healthcare-seeking behaviour and the importance of utilizing available healthcare and laboratory services.",
          "The activities combined health education with practical interventions, including screening, counselling, referral, distribution of 100 insecticide-treated mosquito nets and environmental sanitation"
        ]
      }
    ]
  },
  {
    "id": "mlo-06",
    "source": "General MLO 6",
    "title": "Community Projects",
    "kind": "general",
    "objective": "To Mobilize Community Resources In Provision Of At Least One Project That Will Enhance The Attainment Of The Who Theme “Together For Health, Stand With Science”",
    "sections": [
      {
        "heading": "Introduction",
        "paragraphs": [
          "Community-based education and service learning is intended to move beyond the identification of health needs to practical interventions that respond to those needs in collaboration with the people and institutions within the community.",
          "In Shao Community, the COBES team used information obtained from community mapping, questionnaire administration, interactions with community leaders and residents, health-facility assessments, and direct observation to identify areas where relatively simple interventions could contribute to health promotion, disease prevention, environmental sanitation, livelihood protection, and improvement of health-service capacity.",
          "The interventions implemented by the team were guided by the WHO theme, “Together for Health, Stand with Science.” The theme was reflected through collective action with community stakeholders and through interventions based on observed needs rather than assumptions. The projects combined preventive health measures, environmental-health activities, educational support, occupational-health protection, and support for medical laboratory services."
        ]
      },
      {
        "heading": "Identification Of Community Needs And Project Prioritization",
        "paragraphs": [
          "During the initial needs assessment phase, the team conducted community entry activities, mapping, questionnaire surveys, visits to health facilities, and interactions with residents, healthcare workers, and other community stakeholders. The community was divided into eight regions during the mapping and survey exercise: Oke Lado, Ogidi, Oke Boo, Ode Aare, Ode Alawon, Isale Oja, Oju Oja, and Oke Sinniga. This ensured that information was obtained from different sections of Shao Community and provided a broader representation of the community’s needs.",
          "The team also visited the health facilities within the community to assess the existing healthcare environment and identify challenges affecting service delivery. Discussions with healthcare personnel and observations during these visits provided additional insight into the practical needs of the facilities and the challenges encountered in providing healthcare services."
        ]
      },
      {
        "heading": "Key Findings Included",
        "paragraphs": [
          "The community had diverse needs across the different mapped regions, requiring a broad-based assessment before project selection.",
          "Visits to the health facilities highlighted challenges affecting the delivery of healthcare services and provided an opportunity to engage directly with healthcare workers.",
          "Community members and stakeholders provided additional perspectives on needs and challenges that were relevant to their daily experiences.",
          "The combination of survey findings, facility observations, and stakeholder discussions provided a basis for identifying interventions that were both relevant to the community and feasible for the team to implement.",
          "Following the assessment, the project team held brainstorming and planning sessions to review the identified needs and determine appropriate interventions. Discussions with community stakeholders were also undertaken to assess the feasibility and relevance of the proposed projects. Through this process, project priorities were determined based on the needs identified during the field activities, the potential benefit to the community, and the feasibility of implementation.",
          "This approach ensured that project selection was informed by evidence gathered directly from the community and its healthcare facilities, while also incorporating the perspectives of residents, healthcare workers, and other stakeholders in Shao ccommunity."
        ]
      },
      {
        "heading": "Mobilization Of Community Resources",
        "paragraphs": [
          "Resource mobilization involved engagement with traditional and community leadership, healthcare facilities, residents, local producers, and other relevant stakeholders. The team paid courtesy visits to the traditional institution and community leadership, sought permission for the use of community spaces, engaged healthcare facilities in preparation for interventions, and interacted directly with residents during sanitation activities, health outreaches, and project assessments.",
          "The team also mobilized the resources and support required for the implementation of the identified interventions. This involved not only the provision of relevant materials and equipment, but also the active participation of community members and other stakeholders. For example, community members contributed their labor and skills during the construction of the well cover, demonstrating local ownership and participation in the intervention.",
          "Thus, resource mobilization extended beyond financial or material contributions to include community participation, stakeholder support, available human resources, and the use of existing community resources and facilities. This collaborative approach supported the implementation of the interventions and encouraged greater community involvement in the projects."
        ]
      },
      {
        "heading": "Community Projects Implemented",
        "paragraphs": [
          "Repair and commissioning of the well cover.",
          "Donation of an electrophoresis machine.",
          "Donation of a microhaematocrit reader.",
          "Distribution of Insecticide-Treated Mosquito Nets.",
          "Distribution of exercise books and Health Education.",
          "Provision of Protective Safety Glasses for Garri Processors."
        ]
      },
      {
        "heading": "Factors Considered Before Choosing The Project",
        "paragraphs": [
          "The factors considered before the selection and implementation of the projects include:",
          "Identified community needs – The project was selected based on the major needs and problems identified during community assessment and interactions with residents.",
          "Relevance to the community – The project needed to address a problem that was directly relevant to the health, social, or economic well-being of the people of Shao.",
          "Feasibility – The availability of time, materials, personnel, skills, and other resources needed to successfully implement the project was considered.",
          "Community acceptance and participation – The willingness of community leaders, stakeholders, and residents to support and participate in the project was considered.",
          "Sustainability – Preference was given to a project whose benefits could continue beyond the COBES posting and that the community could maintain or build upon.",
          "Expected impact – The potential number of people who would benefit and the extent to which the project could improve the identified problem were considered.",
          "Cost-effectiveness – The team considered the available funds and selected an intervention that could achieve meaningful results without requiring excessive resources.",
          "Time frame – The project had to be achievable within the limited duration of the COBES posting."
        ]
      },
      {
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The repair of the damaged well cover was selected as a community intervention after the assessment identified the well as an important source of water for residents. The damaged cover presented a potential safety hazard, particularly the risk of accidental falls for individuals accessing the well. It also exposed the water source to possible contamination from surrounding materials and activities.",
          "Given the community's regular dependence on the well, restoring the cover was considered a practical, immediate, and sustainable intervention. The project was also feasible within the available resources and allowed the team to address a clearly identified community need with a tangible outcome."
        ]
      },
      {
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "The intervention involved assessing the condition of the existing well cover, identifying the major safety concerns, and determining the most appropriate approach for restoring it. The team engaged with community members to better understand the use of the well and the concerns associated with the damaged cover.",
          "Following this assessment, the damaged cover was repaired and restored to provide safer access to the well and better protection of the water source. The completed project was commissioned on 13th August 2026 in the presence of Pa. Bello and other members of the community.",
          "After the commissioning of the well, the team interacted with residents who regularly used the well and conducted brief interviews to understand its importance, frequency of use, and role within the community."
        ]
      },
      {
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The intervention resulted in the restoration of a safer and more secure covering for a community water source that is regularly accessed by residents. By addressing the damaged structure, the project reduced the immediate risk of accidental falls and helped limit the exposure of the well to potential sources of contamination.",
          "Beyond the physical repair, the project provided an opportunity for meaningful community engagement. Discussions with regular users of the well demonstrated its importance to everyday community life and provided the team with a better understanding of the practical challenges residents face in accessing essential resources.",
          "The project therefore achieved both a physical and community-level impact: it improved the safety and protection of an existing community resource while demonstrating that relatively simple, targeted interventions can produce meaningful benefits when they are based on needs identified directly within the community."
        ]
      },
      {
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The provision of an electrophoresis machine was selected in response to the identified gap in genotype testing capacity at the Primary Health Centre. The existing electrophoresis equipment had been non-functional for an extended period of time, limiting the facility’s ability to provide genotype testing locally and increasing reliance on external laboratories.",
          "The intervention was particularly relevant to the community’s annual mass wedding programme, where a large number of prospective couples require genotype screening as part of their pre-marital health assessment. Restoring this capacity was therefore considered a practical intervention with potential for continued community benefit."
        ]
      },
      {
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "The intervention involved providing an electrophoresis machine to the Primary Health Centre to support the laboratory’s genotype testing services. The equipment was delivered to the facility and made available for use by the laboratory personnel, with the aim of strengthening the facility’s existing diagnostic capacity."
        ]
      },
      {
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The intervention is expected to improve local access to hemoglobin genotype testing and reduce the need for residents to travel to external facilities for the service. It will also support more timely screening during the annual mass wedding programme and strengthen the diagnostic capacity of the Primary Health Centre.",
          "Overall, the provision of the equipment addresses an existing laboratory service gap and provides a resource that can continue to benefit the community beyond the COBES exercise."
        ]
      },
      {
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The provision of a microhaematocrit reader was selected to address an identified gap in the laboratory capacity of ECWA. The facility lacked appropriate equipment for accurate and efficient interpretation of packed cell volume (PCV), making the provision of a suitable reader relevant to improving routine hematological investigations."
        ]
      },
      {
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "A microhaematocrit reader was delivered to ECWA and formally handed over to the facility for use by the laboratory personnel. The intervention was intended to complement the existing laboratory setup rather than introduce a separate diagnostic service."
        ]
      },
      {
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The provision of the reader is expected to improve the efficiency and accuracy of PCV determination, supporting the identification and monitoring of anemia and other conditions associated with abnormal red cell volume. It also strengthens the facility’s existing laboratory services and improves access to essential hematological investigations within the community.",
          "Overall, the intervention addressed an existing diagnostic equipment gap while strengthening a service already provided by the facility. This approach promotes continuity and sustainability, as the equipment remains within the existing healthcare system for continued use by community members."
        ]
      },
      {
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The community needs assessment identified malaria as a recurrent and significant health problem within the community, establishing the need for preventive measures at the household level. This finding is consistent with the wider malaria burden in Nigeria, which remains one of the countries most affected by malaria globally. The WHO World Malaria Report 2025 reported that Nigeria accounted for approximately 30.3% of global malaria deaths in 2024."
        ]
      },
      {
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "In response to the identified need, 100 insecticide-treated mosquito nets (ITNs) were distributed to community members during the second health outreach held at the Primary Health Care Centre, Isale Oja, on the 15th August 2026. The distribution was accompanied by brief health education on the importance of consistent and proper use of the nets to reduce exposure to malaria-transmitting mosquitoes."
        ]
      },
      {
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The intervention improved access to an established malaria-prevention measure among community members and provided practical support for reducing household exposure to mosquito bites. The accompanying health education also promoted appropriate utilization of the nets, addressing both the identified access and awareness gaps.",
          "Overall, the intervention complemented existing malaria prevention efforts by combining the provision of ITNs with community education, thereby supporting sustained household-level malaria prevention."
        ]
      },
      {
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The intervention was selected to promote healthy behaviors, disease prevention, and health awareness among children and adolescents within the community. The sensitization on Medical Laboratory Science was included to improve students’ understanding of the role of the profession in disease diagnosis, monitoring, and prevention, while also creating early awareness of healthcare-related career opportunities.",
          "The distribution of exercise books was also incorporated to provide practical educational support to the pupils and students. This was intended to encourage regular learning and reinforce the importance of education as an essential component of long-term community development."
        ]
      },
      {
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "During the second health outreach, primary and secondary school students were engaged in age-appropriate health education sessions. Primary school children were taught personal hygiene, environmental sanitation, proper handwashing, safe waste disposal, and other practices that help prevent common communicable diseases. Secondary school students received broader education on personal hygiene, preventive healthcare, and general health practices. They were also sensitized on Medical Laboratory Science and the role of Medical Laboratory Scientists in disease diagnosis, monitoring, and prevention. Exercise books were distributed to the participating children and students to support their academic activities."
        ]
      },
      {
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The intervention improved awareness of basic hygiene and disease-prevention practices among the participating children and adolescents. The Medical Laboratory Science sensitization also increased students’ awareness of laboratory medicine and its contribution to healthcare delivery, while providing early exposure to a potential healthcare career.",
          "The exercise books provided direct educational support and encouraged continued learning among the beneficiaries. Overall, the activity combined health promotion, disease prevention, career awareness, and educational support, extending the impact of the community intervention beyond immediate healthcare services."
        ]
      },
      {
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The garri-processing activity was identified as an important livelihood within the community, involving both men and women and contributing to household income and food production. The visit also revealed potential occupational health risks, particularly during the grinding stage, where workers are exposed to dust and airborne particles that may enter the eyes and cause irritation or other eye-related discomfort.",
          "The provision of protective eyewear was therefore selected as a simple, practical, and sustainable intervention to reduce preventable occupational exposure among workers involved in garri processing."
        ]
      },
      {
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "The team assessed the processing activities and identified the grinding stage as a major point of dust exposure. Protective safety glasses were subsequently provided at the identified garri processing stores for use during processing activities.",
          "The provision was accompanied by practical health education on the correct use, cleaning, maintenance, and storage of the protective eyewear. Workers were encouraged to use the glasses particularly during grinding and other activities that generate dust or airborne particles."
        ]
      },
      {
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The intervention improved awareness of occupational health and safety practices among garri processors and provided a practical means of reducing exposure of the eyes to dust and other airborne particles.",
          "To promote sustainability, the protective glasses were retained at the processing sites for shared workplace use rather than distributed as one-time personal items. This ensures that the protective equipment remains available for workers during routine processing activities and provides an ongoing preventive measure against avoidable occupational hazards."
        ]
      },
      {
        "heading": "Stakeholder And Community Participation",
        "paragraphs": [
          "Community participation was a fundamental component of the implementation of the COBES interventions, as the success and sustainability of community-based projects depend on the involvement and cooperation of the people and institutions within the community. Throughout the exercise, the team interacted with traditional authorities, community leaders, healthcare personnel, residents, religious institutions, school-age children and students, and local producers, according to the nature of each intervention.",
          "The traditional institution played an important role in facilitating access to the community and supporting the implementation of the health activities. Prior to the first health outreach, the team engaged the traditional council and obtained the necessary permission to use the Aafin Ohoro as the venue. The involvement of the traditional institution provided an important link between the team and the wider community and contributed to community acceptance and participation in the outreach activities.",
          "Healthcare workers and health facilities were also actively involved in the implementation of interventions directed towards strengthening existing health services.",
          "The Primary Health Care Centre and ECWA health facility received and supported the use of laboratory equipment provided as part of the community development interventions. Their involvement was important in ensuring that the equipment was incorporated into existing laboratory services and could continue to benefit community members beyond the period of the COBES exercise.",
          "Community members were further engaged through the various health outreach activities, during which they participated in health education, screening services, malaria-prevention activities, and other preventive health interventions. Secondary school students and younger children of primary-school age were also included in the health-education component of the project, receiving age-appropriate information on hygiene, sanitation, personal health practices, and the importance of healthcare services. This approach allowed participation to extend beyond adult beneficiaries and addressed health promotion among younger members of the community.",
          "The team also engaged with local producers at the garri-processing area during the skill-acquisition visit. Through observation and interaction with workers, an occupational health risk associated with exposure to dust and particles during the grinding process was identified. This informed the provision of protective safety glasses for use at the processing stores and the accompanying education on their appropriate use and maintenance. The intervention therefore demonstrated how direct engagement with community members involved in livelihood activities could contribute to the identification of practical occupational health needs.",
          "An important lesson in community participation was also obtained from the assessment of the existing incinerator project. Although the physical infrastructure was present, the observation that some community members were not sufficiently aware of its purpose highlighted that the provision of infrastructure alone does not necessarily guarantee effective community ownership or utilization. This reinforced the importance of combining physical interventions with adequate sensitization, communication, stakeholder involvement, and follow-up.",
          "Overall, stakeholder and community participation strengthened the implementation of the COBES projects by creating channels for communication, facilitating access to community structures and existing health facilities, identifying relevant community needs, and promoting local ownership of the interventions. The experience further demonstrated that sustainable community development requires more than the provision of materials or infrastructure; it requires the active involvement and understanding of the people and institutions expected to use, maintain, and benefit from the interventions."
        ]
      },
      {
        "heading": "Relationship Of The Interventions To The Who Theme",
        "paragraphs": [
          "The community development interventions undertaken during the COBES exercise were closely aligned with the WHO theme, “Together for Health, Stand with Science.” The theme was reflected not only in the nature of the projects implemented but also in the collaborative approach adopted in identifying community needs, planning interventions, and working with existing community and health structures. The interventions addressed a range of identified needs, including environmental sanitation, malaria prevention, occupational health and safety, health education, and strengthening of laboratory diagnostic capacity.",
          "The “Together for Health” component was demonstrated through the active participation and collaboration of different stakeholders within the community. The traditional institution and community leadership facilitated access to the community and supported the organization of the health outreach activities. Healthcare workers and existing health facilities were involved in receiving and incorporating the donated laboratory equipment into their services. Community members participated in the health outreaches and received preventive health interventions and education, while school children and students were engaged in age-appropriate health and hygiene education. The team also interacted directly with local garri processors, enabling the identification of an occupational health risk and the development of a practical intervention involving protective eyewear. These activities demonstrated that improving community health is a shared responsibility requiring cooperation between health professionals, community structures, and the people they serve.",
          "The “Stand with Science” component was reflected in the use of health knowledge, preventive principles, and laboratory-based approaches to respond to identified community needs. The provision of an electrophoresis machine strengthened the capacity of the health facility to perform haemoglobin genotype testing, particularly in relation to the community’s annual mass-wedding programme, while the microhaematocrit reader supported routine haematological investigations. The distribution of insecticide-treated mosquito nets represented an established malaria-prevention strategy in response to malaria being identified as a significant community health concern during the needs assessment. Similarly, the provision of protective safety glasses at gari-processing sites was based on the observed risk of ocular exposure to dust and particulate matter during grinding activities.",
          "Health education was also an important expression of the theme. Community members and school-age children were provided with information on malaria prevention, personal hygiene, environmental sanitation, occupational safety, and general health practices. These educational interventions sought to translate established health knowledge into practical behaviours that could reduce preventable health risks.",
          "Overall, the interventions demonstrated the complementary relationship between collective action and evidence-informed health practice. The “Together for Health” principle was expressed through stakeholder participation, community engagement, and shared responsibility, while “Stand with Science” was demonstrated through the application of preventive health measures, laboratory services, health education, and interventions guided by identified community health needs. In this way, the COBES activities reflected the WHO theme by combining community partnership with scientifically informed approaches to improving health and wellbeing."
        ]
      },
      {
        "heading": "Sustainability Of The Projects",
        "paragraphs": [
          "Sustainability was considered in the selection, planning, and implementation of the community development interventions, with emphasis placed on ensuring that the benefits of the projects would extend beyond the period of the COBES exercise. Rather than focusing solely on short-term activities, the team adopted interventions that could be incorporated into existing community structures, health services, and daily practices.",
          "The well-cover repair was implemented as a community-based environmental health intervention intended to remain a functional community resource after the completion of the COBES exercise. By restoring the protective covering of the well, the project addressed a potential source of environmental contamination and helped promote safer access to the water source. Its continued benefit, however, depends on appropriate use, routine maintenance, and community responsibility for the facility.",
          "The laboratory equipments provided to the Primary Health Care Centre and ECWA was handed over to the existing healthcare facilities rather than operated as a temporary service by the COBES team. This approach allows the equipment to become part of the facilities’ available resources and continue supporting routine laboratory investigations after the team’s departure. The integration of the equipment into existing health services also provides a more sustainable approach to strengthening diagnostic capacity within the community.",
          "Similarly, the 100 insecticide-treated mosquito nets were distributed directly to community members during the health outreach, accompanied by education on their correct and consistent use. This model placed responsibility for continued utilization with the beneficiaries and was intended to promote sustained household-level malaria prevention rather than limiting the intervention to the duration of the outreach programme.",
          "The protective safety glasses provided at the garri-processing stores were deliberately retained at the workplaces to allow repeated use by workers during grinding and other activities that generate airborne particles. Accompanying the provision with practical education on proper use, cleaning, and storage was intended to improve the likelihood of continued utilization and preserve the usefulness of the intervention beyond the team's visit.",
          "Consequently, sustainability of the COBES interventions was approached not merely in terms of leaving materials or facilities behind, but in terms of integrating interventions into existing community systems and promoting the knowledge, ownership, and practices required for their continued use.",
          "Continued collaboration between community members, local leadership, healthcare facilities, and other relevant stakeholders will remain important in maintaining the benefits of the projects after the completion of the COBES exercise, so that these projects to remain beneficial after the implementing team has departed."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "The COBES exercise provided an opportunity to mobilize community, institutional, and material resources to address identified health and developmental needs within Shao Community. The interventions implemented during the exercise were guided by findings from the community assessment and extended across several areas, including environmental sanitation, malaria prevention, laboratory diagnostic capacity, health and hygiene education, educational support, occupational health and safety, and community infrastructure.",
          "The implementation of these projects was supported by the participation of traditional and community leaders, healthcare personnel, residents, school-age children and students, and local producers. This collaborative approach facilitated access to community structures, strengthened existing health services, and ensured that interventions were directed towards practical needs identified within the community. The integration of donated laboratory equipment into existing healthcare facilities and the retention of occupational safety materials at processing sites further provided opportunities for the benefits of the interventions to continue beyond the COBES period.",
          "The activities collectively reflected the WHO theme, “Together for Health, Stand with Science,” by combining community participation and shared responsibility with preventive, diagnostic, educational, and evidence-informed health interventions. The experience also demonstrated that effective community development extends beyond the provision of physical resources. Education, community ownership, appropriate utilization, stakeholder involvement, and continued follow-up are essential for ensuring that interventions remain relevant and beneficial over time.",
          "By and large, the COBES interventions demonstrated the value of working collaboratively with communities and existing institutions to translate identified health needs into practical and sustainable actions. The exercise therefore contributed not only to addressing immediate community health concerns but also to strengthening awareness, local capacity, and collective responsibility for the continued improvement of health and wellbeing in Shao Community."
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Introduction",
        "paragraphs": [
          "Community-based education and service learning is intended to move beyond the identification of health needs to practical interventions that respond to those needs in collaboration with the people and institutions within the community.",
          "In Shao Community, the COBES team used information obtained from community mapping, questionnaire administration, interactions with community leaders and residents, health-facility assessments, and direct observation to identify areas where relatively simple interventions could contribute to health promotion, disease prevention, environmental sanitation, livelihood protection, and improvement of health-service capacity.",
          "The interventions implemented by the team were guided by the WHO theme, “Together for Health, Stand with Science.” The theme was reflected through collective action with community stakeholders and through interventions based on observed needs rather than assumptions. The projects combined preventive health measures, environmental-health activities, educational support, occupational-health protection, and support for medical laboratory services."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Community Projects — field overview",
        "src": "",
        "poster": "",
        "alt": "Community Projects — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Identification Of Community Needs And Project Prioritization",
        "paragraphs": [
          "During the initial needs assessment phase, the team conducted community entry activities, mapping, questionnaire surveys, visits to health facilities, and interactions with residents, healthcare workers, and other community stakeholders. The community was divided into eight regions during the mapping and survey exercise: Oke Lado, Ogidi, Oke Boo, Ode Aare, Ode Alawon, Isale Oja, Oju Oja, and Oke Sinniga. This ensured that information was obtained from different sections of Shao Community and provided a broader representation of the community’s needs.",
          "The team also visited the health facilities within the community to assess the existing healthcare environment and identify challenges affecting service delivery. Discussions with healthcare personnel and observations during these visits provided additional insight into the practical needs of the facilities and the challenges encountered in providing healthcare services."
        ]
      },
      {
        "kind": "content",
        "heading": "Key Findings Included",
        "paragraphs": [
          "The community had diverse needs across the different mapped regions, requiring a broad-based assessment before project selection.",
          "Visits to the health facilities highlighted challenges affecting the delivery of healthcare services and provided an opportunity to engage directly with healthcare workers.",
          "Community members and stakeholders provided additional perspectives on needs and challenges that were relevant to their daily experiences.",
          "The combination of survey findings, facility observations, and stakeholder discussions provided a basis for identifying interventions that were both relevant to the community and feasible for the team to implement.",
          "Following the assessment, the project team held brainstorming and planning sessions to review the identified needs and determine appropriate interventions. Discussions with community stakeholders were also undertaken to assess the feasibility and relevance of the proposed projects. Through this process, project priorities were determined based on the needs identified during the field activities, the potential benefit to the community, and the feasibility of implementation.",
          "This approach ensured that project selection was informed by evidence gathered directly from the community and its healthcare facilities, while also incorporating the perspectives of residents, healthcare workers, and other stakeholders in Shao ccommunity."
        ]
      },
      {
        "kind": "content",
        "heading": "Mobilization Of Community Resources",
        "paragraphs": [
          "Resource mobilization involved engagement with traditional and community leadership, healthcare facilities, residents, local producers, and other relevant stakeholders. The team paid courtesy visits to the traditional institution and community leadership, sought permission for the use of community spaces, engaged healthcare facilities in preparation for interventions, and interacted directly with residents during sanitation activities, health outreaches, and project assessments.",
          "The team also mobilized the resources and support required for the implementation of the identified interventions. This involved not only the provision of relevant materials and equipment, but also the active participation of community members and other stakeholders. For example, community members contributed their labor and skills during the construction of the well cover, demonstrating local ownership and participation in the intervention.",
          "Thus, resource mobilization extended beyond financial or material contributions to include community participation, stakeholder support, available human resources, and the use of existing community resources and facilities. This collaborative approach supported the implementation of the interventions and encouraged greater community involvement in the projects."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Community Projects Implemented",
        "paragraphs": [
          "Repair and commissioning of the well cover.",
          "Donation of an electrophoresis machine.",
          "Donation of a microhaematocrit reader.",
          "Distribution of Insecticide-Treated Mosquito Nets.",
          "Distribution of exercise books and Health Education.",
          "Provision of Protective Safety Glasses for Garri Processors."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Community Projects — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Factors Considered Before Choosing The Project",
        "paragraphs": [
          "The factors considered before the selection and implementation of the projects include:",
          "Identified community needs – The project was selected based on the major needs and problems identified during community assessment and interactions with residents.",
          "Relevance to the community – The project needed to address a problem that was directly relevant to the health, social, or economic well-being of the people of Shao.",
          "Feasibility – The availability of time, materials, personnel, skills, and other resources needed to successfully implement the project was considered.",
          "Community acceptance and participation – The willingness of community leaders, stakeholders, and residents to support and participate in the project was considered.",
          "Sustainability – Preference was given to a project whose benefits could continue beyond the COBES posting and that the community could maintain or build upon.",
          "Expected impact – The potential number of people who would benefit and the extent to which the project could improve the identified problem were considered.",
          "Cost-effectiveness – The team considered the available funds and selected an intervention that could achieve meaningful results without requiring excessive resources.",
          "Time frame – The project had to be achievable within the limited duration of the COBES posting."
        ]
      },
      {
        "kind": "content",
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The repair of the damaged well cover was selected as a community intervention after the assessment identified the well as an important source of water for residents. The damaged cover presented a potential safety hazard, particularly the risk of accidental falls for individuals accessing the well. It also exposed the water source to possible contamination from surrounding materials and activities.",
          "Given the community's regular dependence on the well, restoring the cover was considered a practical, immediate, and sustainable intervention. The project was also feasible within the available resources and allowed the team to address a clearly identified community need with a tangible outcome."
        ]
      },
      {
        "kind": "content",
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "The intervention involved assessing the condition of the existing well cover, identifying the major safety concerns, and determining the most appropriate approach for restoring it. The team engaged with community members to better understand the use of the well and the concerns associated with the damaged cover.",
          "Following this assessment, the damaged cover was repaired and restored to provide safer access to the well and better protection of the water source. The completed project was commissioned on 13th August 2026 in the presence of Pa. Bello and other members of the community.",
          "After the commissioning of the well, the team interacted with residents who regularly used the well and conducted brief interviews to understand its importance, frequency of use, and role within the community."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The intervention resulted in the restoration of a safer and more secure covering for a community water source that is regularly accessed by residents. By addressing the damaged structure, the project reduced the immediate risk of accidental falls and helped limit the exposure of the well to potential sources of contamination.",
          "Beyond the physical repair, the project provided an opportunity for meaningful community engagement. Discussions with regular users of the well demonstrated its importance to everyday community life and provided the team with a better understanding of the practical challenges residents face in accessing essential resources.",
          "The project therefore achieved both a physical and community-level impact: it improved the safety and protection of an existing community resource while demonstrating that relatively simple, targeted interventions can produce meaningful benefits when they are based on needs identified directly within the community."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The provision of an electrophoresis machine was selected in response to the identified gap in genotype testing capacity at the Primary Health Centre. The existing electrophoresis equipment had been non-functional for an extended period of time, limiting the facility’s ability to provide genotype testing locally and increasing reliance on external laboratories.",
          "The intervention was particularly relevant to the community’s annual mass wedding programme, where a large number of prospective couples require genotype screening as part of their pre-marital health assessment. Restoring this capacity was therefore considered a practical intervention with potential for continued community benefit."
        ]
      },
      {
        "kind": "content",
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "The intervention involved providing an electrophoresis machine to the Primary Health Centre to support the laboratory’s genotype testing services. The equipment was delivered to the facility and made available for use by the laboratory personnel, with the aim of strengthening the facility’s existing diagnostic capacity."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The intervention is expected to improve local access to hemoglobin genotype testing and reduce the need for residents to travel to external facilities for the service. It will also support more timely screening during the annual mass wedding programme and strengthen the diagnostic capacity of the Primary Health Centre.",
          "Overall, the provision of the equipment addresses an existing laboratory service gap and provides a resource that can continue to benefit the community beyond the COBES exercise."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The provision of a microhaematocrit reader was selected to address an identified gap in the laboratory capacity of ECWA. The facility lacked appropriate equipment for accurate and efficient interpretation of packed cell volume (PCV), making the provision of a suitable reader relevant to improving routine hematological investigations."
        ]
      },
      {
        "kind": "content",
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "A microhaematocrit reader was delivered to ECWA and formally handed over to the facility for use by the laboratory personnel. The intervention was intended to complement the existing laboratory setup rather than introduce a separate diagnostic service."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The provision of the reader is expected to improve the efficiency and accuracy of PCV determination, supporting the identification and monitoring of anemia and other conditions associated with abnormal red cell volume. It also strengthens the facility’s existing laboratory services and improves access to essential hematological investigations within the community.",
          "Overall, the intervention addressed an existing diagnostic equipment gap while strengthening a service already provided by the facility. This approach promotes continuity and sustainability, as the equipment remains within the existing healthcare system for continued use by community members."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The community needs assessment identified malaria as a recurrent and significant health problem within the community, establishing the need for preventive measures at the household level. This finding is consistent with the wider malaria burden in Nigeria, which remains one of the countries most affected by malaria globally. The WHO World Malaria Report 2025 reported that Nigeria accounted for approximately 30.3% of global malaria deaths in 2024."
        ]
      },
      {
        "kind": "content",
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "In response to the identified need, 100 insecticide-treated mosquito nets (ITNs) were distributed to community members during the second health outreach held at the Primary Health Care Centre, Isale Oja, on the 15th August 2026. The distribution was accompanied by brief health education on the importance of consistent and proper use of the nets to reduce exposure to malaria-transmitting mosquitoes."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The intervention improved access to an established malaria-prevention measure among community members and provided practical support for reducing household exposure to mosquito bites. The accompanying health education also promoted appropriate utilization of the nets, addressing both the identified access and awareness gaps.",
          "Overall, the intervention complemented existing malaria prevention efforts by combining the provision of ITNs with community education, thereby supporting sustained household-level malaria prevention."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The intervention was selected to promote healthy behaviors, disease prevention, and health awareness among children and adolescents within the community. The sensitization on Medical Laboratory Science was included to improve students’ understanding of the role of the profession in disease diagnosis, monitoring, and prevention, while also creating early awareness of healthcare-related career opportunities.",
          "The distribution of exercise books was also incorporated to provide practical educational support to the pupils and students. This was intended to encourage regular learning and reinforce the importance of education as an essential component of long-term community development."
        ]
      },
      {
        "kind": "content",
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "During the second health outreach, primary and secondary school students were engaged in age-appropriate health education sessions. Primary school children were taught personal hygiene, environmental sanitation, proper handwashing, safe waste disposal, and other practices that help prevent common communicable diseases. Secondary school students received broader education on personal hygiene, preventive healthcare, and general health practices. They were also sensitized on Medical Laboratory Science and the role of Medical Laboratory Scientists in disease diagnosis, monitoring, and prevention. Exercise books were distributed to the participating children and students to support their academic activities."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The intervention improved awareness of basic hygiene and disease-prevention practices among the participating children and adolescents. The Medical Laboratory Science sensitization also increased students’ awareness of laboratory medicine and its contribution to healthcare delivery, while providing early exposure to a potential healthcare career.",
          "The exercise books provided direct educational support and encouraged continued learning among the beneficiaries. Overall, the activity combined health promotion, disease prevention, career awareness, and educational support, extending the impact of the community intervention beyond immediate healthcare services."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Rationale For Selection Of The Project",
        "paragraphs": [
          "The garri-processing activity was identified as an important livelihood within the community, involving both men and women and contributing to household income and food production. The visit also revealed potential occupational health risks, particularly during the grinding stage, where workers are exposed to dust and airborne particles that may enter the eyes and cause irritation or other eye-related discomfort.",
          "The provision of protective eyewear was therefore selected as a simple, practical, and sustainable intervention to reduce preventable occupational exposure among workers involved in garri processing."
        ]
      },
      {
        "kind": "content",
        "heading": "Project Strategy And Implementation",
        "paragraphs": [
          "The team assessed the processing activities and identified the grinding stage as a major point of dust exposure. Protective safety glasses were subsequently provided at the identified garri processing stores for use during processing activities.",
          "The provision was accompanied by practical health education on the correct use, cleaning, maintenance, and storage of the protective eyewear. Workers were encouraged to use the glasses particularly during grinding and other activities that generate dust or airborne particles."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Project Impact And Outcome",
        "paragraphs": [
          "The intervention improved awareness of occupational health and safety practices among garri processors and provided a practical means of reducing exposure of the eyes to dust and other airborne particles.",
          "To promote sustainability, the protective glasses were retained at the processing sites for shared workplace use rather than distributed as one-time personal items. This ensures that the protective equipment remains available for workers during routine processing activities and provides an ongoing preventive measure against avoidable occupational hazards."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Stakeholder And Community Participation",
        "paragraphs": [
          "Community participation was a fundamental component of the implementation of the COBES interventions, as the success and sustainability of community-based projects depend on the involvement and cooperation of the people and institutions within the community. Throughout the exercise, the team interacted with traditional authorities, community leaders, healthcare personnel, residents, religious institutions, school-age children and students, and local producers, according to the nature of each intervention.",
          "The traditional institution played an important role in facilitating access to the community and supporting the implementation of the health activities. Prior to the first health outreach, the team engaged the traditional council and obtained the necessary permission to use the Aafin Ohoro as the venue. The involvement of the traditional institution provided an important link between the team and the wider community and contributed to community acceptance and participation in the outreach activities.",
          "Healthcare workers and health facilities were also actively involved in the implementation of interventions directed towards strengthening existing health services.",
          "The Primary Health Care Centre and ECWA health facility received and supported the use of laboratory equipment provided as part of the community development interventions. Their involvement was important in ensuring that the equipment was incorporated into existing laboratory services and could continue to benefit community members beyond the period of the COBES exercise.",
          "Community members were further engaged through the various health outreach activities, during which they participated in health education, screening services, malaria-prevention activities, and other preventive health interventions. Secondary school students and younger children of primary-school age were also included in the health-education component of the project, receiving age-appropriate information on hygiene, sanitation, personal health practices, and the importance of healthcare services. This approach allowed participation to extend beyond adult beneficiaries and addressed health promotion among younger members of the community.",
          "The team also engaged with local producers at the garri-processing area during the skill-acquisition visit. Through observation and interaction with workers, an occupational health risk associated with exposure to dust and particles during the grinding process was identified. This informed the provision of protective safety glasses for use at the processing stores and the accompanying education on their appropriate use and maintenance. The intervention therefore demonstrated how direct engagement with community members involved in livelihood activities could contribute to the identification of practical occupational health needs.",
          "An important lesson in community participation was also obtained from the assessment of the existing incinerator project. Although the physical infrastructure was present, the observation that some community members were not sufficiently aware of its purpose highlighted that the provision of infrastructure alone does not necessarily guarantee effective community ownership or utilization. This reinforced the importance of combining physical interventions with adequate sensitization, communication, stakeholder involvement, and follow-up.",
          "Overall, stakeholder and community participation strengthened the implementation of the COBES projects by creating channels for communication, facilitating access to community structures and existing health facilities, identifying relevant community needs, and promoting local ownership of the interventions. The experience further demonstrated that sustainable community development requires more than the provision of materials or infrastructure; it requires the active involvement and understanding of the people and institutions expected to use, maintain, and benefit from the interventions."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Relationship Of The Interventions To The Who Theme",
        "paragraphs": [
          "The community development interventions undertaken during the COBES exercise were closely aligned with the WHO theme, “Together for Health, Stand with Science.” The theme was reflected not only in the nature of the projects implemented but also in the collaborative approach adopted in identifying community needs, planning interventions, and working with existing community and health structures. The interventions addressed a range of identified needs, including environmental sanitation, malaria prevention, occupational health and safety, health education, and strengthening of laboratory diagnostic capacity.",
          "The “Together for Health” component was demonstrated through the active participation and collaboration of different stakeholders within the community. The traditional institution and community leadership facilitated access to the community and supported the organization of the health outreach activities. Healthcare workers and existing health facilities were involved in receiving and incorporating the donated laboratory equipment into their services. Community members participated in the health outreaches and received preventive health interventions and education, while school children and students were engaged in age-appropriate health and hygiene education. The team also interacted directly with local garri processors, enabling the identification of an occupational health risk and the development of a practical intervention involving protective eyewear. These activities demonstrated that improving community health is a shared responsibility requiring cooperation between health professionals, community structures, and the people they serve.",
          "The “Stand with Science” component was reflected in the use of health knowledge, preventive principles, and laboratory-based approaches to respond to identified community needs. The provision of an electrophoresis machine strengthened the capacity of the health facility to perform haemoglobin genotype testing, particularly in relation to the community’s annual mass-wedding programme, while the microhaematocrit reader supported routine haematological investigations. The distribution of insecticide-treated mosquito nets represented an established malaria-prevention strategy in response to malaria being identified as a significant community health concern during the needs assessment. Similarly, the provision of protective safety glasses at gari-processing sites was based on the observed risk of ocular exposure to dust and particulate matter during grinding activities.",
          "Health education was also an important expression of the theme. Community members and school-age children were provided with information on malaria prevention, personal hygiene, environmental sanitation, occupational safety, and general health practices. These educational interventions sought to translate established health knowledge into practical behaviours that could reduce preventable health risks.",
          "Overall, the interventions demonstrated the complementary relationship between collective action and evidence-informed health practice. The “Together for Health” principle was expressed through stakeholder participation, community engagement, and shared responsibility, while “Stand with Science” was demonstrated through the application of preventive health measures, laboratory services, health education, and interventions guided by identified community health needs. In this way, the COBES activities reflected the WHO theme by combining community partnership with scientifically informed approaches to improving health and wellbeing."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Community Projects — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Community Projects — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Sustainability Of The Projects",
        "paragraphs": [
          "Sustainability was considered in the selection, planning, and implementation of the community development interventions, with emphasis placed on ensuring that the benefits of the projects would extend beyond the period of the COBES exercise. Rather than focusing solely on short-term activities, the team adopted interventions that could be incorporated into existing community structures, health services, and daily practices.",
          "The well-cover repair was implemented as a community-based environmental health intervention intended to remain a functional community resource after the completion of the COBES exercise. By restoring the protective covering of the well, the project addressed a potential source of environmental contamination and helped promote safer access to the water source. Its continued benefit, however, depends on appropriate use, routine maintenance, and community responsibility for the facility.",
          "The laboratory equipments provided to the Primary Health Care Centre and ECWA was handed over to the existing healthcare facilities rather than operated as a temporary service by the COBES team. This approach allows the equipment to become part of the facilities’ available resources and continue supporting routine laboratory investigations after the team’s departure. The integration of the equipment into existing health services also provides a more sustainable approach to strengthening diagnostic capacity within the community.",
          "Similarly, the 100 insecticide-treated mosquito nets were distributed directly to community members during the health outreach, accompanied by education on their correct and consistent use. This model placed responsibility for continued utilization with the beneficiaries and was intended to promote sustained household-level malaria prevention rather than limiting the intervention to the duration of the outreach programme.",
          "The protective safety glasses provided at the garri-processing stores were deliberately retained at the workplaces to allow repeated use by workers during grinding and other activities that generate airborne particles. Accompanying the provision with practical education on proper use, cleaning, and storage was intended to improve the likelihood of continued utilization and preserve the usefulness of the intervention beyond the team's visit.",
          "Consequently, sustainability of the COBES interventions was approached not merely in terms of leaving materials or facilities behind, but in terms of integrating interventions into existing community systems and promoting the knowledge, ownership, and practices required for their continued use.",
          "Continued collaboration between community members, local leadership, healthcare facilities, and other relevant stakeholders will remain important in maintaining the benefits of the projects after the completion of the COBES exercise, so that these projects to remain beneficial after the implementing team has departed."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "The COBES exercise provided an opportunity to mobilize community, institutional, and material resources to address identified health and developmental needs within Shao Community. The interventions implemented during the exercise were guided by findings from the community assessment and extended across several areas, including environmental sanitation, malaria prevention, laboratory diagnostic capacity, health and hygiene education, educational support, occupational health and safety, and community infrastructure.",
          "The implementation of these projects was supported by the participation of traditional and community leaders, healthcare personnel, residents, school-age children and students, and local producers. This collaborative approach facilitated access to community structures, strengthened existing health services, and ensured that interventions were directed towards practical needs identified within the community. The integration of donated laboratory equipment into existing healthcare facilities and the retention of occupational safety materials at processing sites further provided opportunities for the benefits of the interventions to continue beyond the COBES period.",
          "The activities collectively reflected the WHO theme, “Together for Health, Stand with Science,” by combining community participation and shared responsibility with preventive, diagnostic, educational, and evidence-informed health interventions. The experience also demonstrated that effective community development extends beyond the provision of physical resources. Education, community ownership, appropriate utilization, stakeholder involvement, and continued follow-up are essential for ensuring that interventions remain relevant and beneficial over time.",
          "By and large, the COBES interventions demonstrated the value of working collaboratively with communities and existing institutions to translate identified health needs into practical and sustainable actions. The exercise therefore contributed not only to addressing immediate community health concerns but also to strengthening awareness, local capacity, and collective responsibility for the continued improvement of health and wellbeing in Shao Community."
        ]
      }
    ]
  },
  {
    "id": "slo-01",
    "source": "Specific MLO 1",
    "title": "Laboratory Provision",
    "kind": "specific",
    "objective": "To Identify The Level Of Provision Of Effective Medical Laboratory Services In The Community",
    "sections": [
      {
        "heading": "Introduction",
        "paragraphs": [
          "Medical laboratory services play an essential role in healthcare by providing investigations that support the diagnosis, assessment, and monitoring of diseases and other health conditions. The effectiveness of these services within a community depends on factors such as the availability of functional facilities, trained personnel, appropriate equipment, essential investigations, consumables, proper record keeping, and effective referral systems.",
          "As part of the COBES posting in Shao Community, the team assessed selected healthcare facilities to gain an understanding of their general operations and the state of their laboratory services. Attention was given to the available equipment, investigations performed, personnel, record keeping, working practices, and other relevant laboratory activities. Laboratory services provided during the community health outreaches were also observed. Findings from the assessment informed subsequent support provided to two of the facilities through the provision of laboratory equipment."
        ]
      },
      {
        "heading": "Healthcare Facilities Asessed",
        "paragraphs": [
          "For the facility-based component of the COBES posting, the team was divided into eight groups. Four groups were assigned to ECWA Clinic, while the remaining four groups were assigned to the Primary Health Care Centre, Shao. The postings provided an opportunity to observe the day-to-day functioning of the facilities and interact with healthcare workers regarding the health needs of the communities they served.",
          "The assessment covered the general operations of the facilities, with particular attention to their laboratory units. The team reviewed the availability and condition of laboratory equipment, routine investigations performed, personnel and their roles, record-keeping practices, and other relevant laboratory procedures. The assessment also provided insight into existing gaps and available resources that could be strengthened to improve the delivery of laboratory services within the community."
        ]
      },
      {
        "heading": "Laboratory Infrastructure And Available Resources",
        "paragraphs": [
          "The laboratory assessment focused on determining the resources and facilities available for the provision of diagnostic services. The team examined the laboratory equipment, routine investigations performed, personnel arrangements, record-keeping practices, and general working conditions within the laboratory units.",
          "The assessment showed that laboratory services were integrated into the healthcare services provided by the facilities. However, the availability of additional equipment was identified as an area that could further strengthen their diagnostic capacity. This informed the subsequent provision of laboratory equipment to support the existing services and improve the facilities’ ability to meet the diagnostic needs of the community."
        ]
      },
      {
        "heading": "Laboratory Personnel And Service Delivery",
        "paragraphs": [
          "The assessment considered the availability and adequacy of healthcare personnel supporting service delivery within the facilities. Findings indicated that staffing was limited across the assessed facilities, with shortages affecting different categories of healthcare workers, including doctors, nurses, and Medical Laboratory Scientists. This limited human-resource capacity has implications for the range, continuity, and efficiency of healthcare and laboratory services available to the community.",
          "The assessment further highlighted that effective laboratory service delivery requires more than the availability of equipment. Adequate numbers of appropriately trained personnel are essential for the proper operation, maintenance, documentation, and utilization of laboratory services. The existing staffing limitations therefore represent an important area requiring continued attention alongside the provision of laboratory equipment.",
          "Strengthening both human-resource capacity and laboratory infrastructure would contribute to improved diagnostic services and more effective healthcare delivery within the community."
        ]
      },
      {
        "heading": "Laboratory Investigations And Diagnostic Services",
        "paragraphs": [
          "The team assessed the range of investigations available within the laboratory units during the facility postings. The assessment showed that the facilities provided a range of routine diagnostic services, including malaria, typhoid, H. pylori, genotype testing, retroviral screening (RVS), hepatitis B and C screening (HBV and HCV), human chorionic gonadotropin (hCG) testing, VDRL, packed cell volume (PCV), blood grouping, and erythrocyte sedimentation rate (ESR).",
          "The assessment also identified gaps in laboratory equipment that could limit the scope and efficiency of diagnostic services. ECWA Clinic lacked a microhaematocrit reader, while the Primary Health Care Centre did not have an electrophoresis machine for haemoglobin genotype testing. These identified gaps informed the subsequent intervention by the COBES team, which provided a microhaematocrit reader to ECWA and an electrophoresis machine to the Primary Health Care Centre to strengthen existing diagnostic capacity.",
          "Laboratory services were also incorporated into the community health outreaches. During the second health outreach at the Primary Health Care Centre, Isale Oja, community members received screening services for conditions including malaria, typhoid, HBV alongside investigations such as blood grouping, and where applicable. Participants were provided with appropriate health information based on the services received and encouraged to seek further care from qualified healthcare professionals where necessary.",
          "Genotype testing was particularly emphasized among individuals of marriageable age and prospective couples, in view of its relevance to informed reproductive and premarital health decisions. Community members were encouraged to utilize the genotype-testing services available at the Primary Health Care Centre, thereby linking the outreach activities with continued use of the facility's laboratory services.",
          "Overall, the assessment and outreach activities demonstrated both the existing range of laboratory investigations available to the community and the equipment gaps that required strengthening, providing a basis for the laboratory-support interventions implemented by the COBES team."
        ]
      },
      {
        "heading": "Laboratory Record Keeping And Practices",
        "paragraphs": [
          "Record keeping and routine laboratory practices were assessed during the facility postings to gain insight into the organization and effectiveness of laboratory service delivery. The team considered how laboratory activities and results were documented, alongside other relevant practices within the laboratory units.",
          "The assessment provided an understanding of the strengths, limitations, and areas requiring support within the facilities. Laboratory service provision was therefore assessed as an integrated system involving equipment, investigations, personnel, documentation, and working practices, rather than considering the availability of equipment alone."
        ]
      },
      {
        "heading": "Interventions To Strengthen Laboratory Diagnostic Services",
        "paragraphs": [
          "Following the facility assessment and identification of areas requiring additional support, the COBES team implemented interventions aimed at strengthening existing laboratory diagnostic capacity within the community. Two laboratory equipment items were provided: an electrophoresis machine to the Primary Health Care Centre and a microhaematocrit reader to ECWA.",
          "The microhaematocrit reader was handed over to ECWA to support routine haematological investigations and improve the laboratory services available to community members. The electrophoresis machine was delivered to the Primary Health Care Centre to strengthen its capacity for haemoglobin genotype testing, particularly in view of the large number of participants requiring genotype screening during the community’s annual mass-wedding programme.",
          "The laboratory intervention was further complemented by laboratory-service advocacy during the second health outreach, where community members were encouraged to utilize the diagnostic services available at the Primary Health Care Centre, including genotype testing. Through the combination of equipment provision and community sensitization, the intervention sought to strengthen both the capacity of existing laboratory services and community access to appropriate diagnostic investigations."
        ]
      },
      {
        "heading": "Community Access To Medical Laboratory Services",
        "paragraphs": [
          "The presence of laboratory services within the assessed healthcare facilities provided community members with access to diagnostic support as part of healthcare delivery. The COBES outreaches further brought screening and laboratory-related services closer to residents and provided opportunities for health education and counselling.",
          "The team also promoted appropriate use of laboratory services through sensitization. Community members were encouraged to seek care from qualified healthcare professionals and to access genotype testing, particularly where relevant to marriage planning. The outreach therefore served both a service-delivery and advocacy function."
        ]
      },
      {
        "heading": "Assessment Of The Level Of Laboratory-Service Provision",
        "paragraphs": [
          "The COBES facility assessment showed that laboratory services were available within the healthcare facilities visited and formed part of the routine services provided to the community. The assessment also demonstrated that effective laboratory service delivery depends on the combined availability of appropriate equipment, competent personnel, adequate documentation, and functional laboratory practices.",
          "However, the assessment also revealed areas requiring further strengthening, particularly in relation to equipment availability and personnel capacity. The need for additional laboratory equipment and the requirement for appropriate personnel during the commissioning of the electrophoresis machine highlighted some of the limitations affecting service capacity.Overall, based on the team’s field assessment, the laboratory-service system within the facilities can be described as existing and functional, but requiring continued strengthening. The interventions provided by the COBES team were therefore directed towards improving existing diagnostic services rather than establishing laboratory services where none previously existed."
        ]
      },
      {
        "heading": "Medical Laboratory Services And The Who Theme",
        "paragraphs": [
          "The assessment and strengthening of laboratory services within Shao Community aligned with the WHO theme, “Together for Health, Stand with Science.” Medical laboratory services provide an important connection between scientific evidence and clinical decision-making, supporting the diagnosis, monitoring, and management of health conditions.",
          "The “Together for Health” component was demonstrated through collaboration with healthcare facilities, laboratory personnel, community members, and other stakeholders in assessing existing services and identifying areas requiring support. The provision of laboratory equipment and advocacy for the utilization of available diagnostic services further reflected a shared approach to improving community health.",
          "The “Stand with Science” component was reflected in the emphasis on laboratory investigations, screening, genotype testing, and strengthening diagnostic capacity through the provision of appropriate laboratory equipment. Overall, the activities demonstrated that effective community healthcare requires collaborative participation supported by reliable scientific and diagnostic services."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "The COBES facility assessment showed that medical laboratory services were available within the healthcare facilities visited in Shao Community, with the team assessing equipment, investigations, personnel, record keeping, and laboratory practices.",
          "The provision of a microhaematocrit reader to ECWA and an electrophoresis machine to the Primary Health Care Centre, alongside community sensitization on laboratory services, provided practical support for existing diagnostic capacity.",
          "Overall, the assessment demonstrated an existing but improvable laboratory-service system, highlighting the continued importance of strengthening equipment, personnel, and service utilization in line with the WHO theme, “Together for Health, Stand with Science.”"
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Introduction",
        "paragraphs": [
          "Medical laboratory services play an essential role in healthcare by providing investigations that support the diagnosis, assessment, and monitoring of diseases and other health conditions. The effectiveness of these services within a community depends on factors such as the availability of functional facilities, trained personnel, appropriate equipment, essential investigations, consumables, proper record keeping, and effective referral systems.",
          "As part of the COBES posting in Shao Community, the team assessed selected healthcare facilities to gain an understanding of their general operations and the state of their laboratory services. Attention was given to the available equipment, investigations performed, personnel, record keeping, working practices, and other relevant laboratory activities. Laboratory services provided during the community health outreaches were also observed. Findings from the assessment informed subsequent support provided to two of the facilities through the provision of laboratory equipment."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Laboratory Provision — field overview",
        "src": "",
        "poster": "",
        "alt": "Laboratory Provision — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Healthcare Facilities Asessed",
        "paragraphs": [
          "For the facility-based component of the COBES posting, the team was divided into eight groups. Four groups were assigned to ECWA Clinic, while the remaining four groups were assigned to the Primary Health Care Centre, Shao. The postings provided an opportunity to observe the day-to-day functioning of the facilities and interact with healthcare workers regarding the health needs of the communities they served.",
          "The assessment covered the general operations of the facilities, with particular attention to their laboratory units. The team reviewed the availability and condition of laboratory equipment, routine investigations performed, personnel and their roles, record-keeping practices, and other relevant laboratory procedures. The assessment also provided insight into existing gaps and available resources that could be strengthened to improve the delivery of laboratory services within the community."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Laboratory Provision — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Laboratory Provision — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Laboratory Infrastructure And Available Resources",
        "paragraphs": [
          "The laboratory assessment focused on determining the resources and facilities available for the provision of diagnostic services. The team examined the laboratory equipment, routine investigations performed, personnel arrangements, record-keeping practices, and general working conditions within the laboratory units.",
          "The assessment showed that laboratory services were integrated into the healthcare services provided by the facilities. However, the availability of additional equipment was identified as an area that could further strengthen their diagnostic capacity. This informed the subsequent provision of laboratory equipment to support the existing services and improve the facilities’ ability to meet the diagnostic needs of the community."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Laboratory Provision — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Laboratory Provision — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Laboratory Personnel And Service Delivery",
        "paragraphs": [
          "The assessment considered the availability and adequacy of healthcare personnel supporting service delivery within the facilities. Findings indicated that staffing was limited across the assessed facilities, with shortages affecting different categories of healthcare workers, including doctors, nurses, and Medical Laboratory Scientists. This limited human-resource capacity has implications for the range, continuity, and efficiency of healthcare and laboratory services available to the community.",
          "The assessment further highlighted that effective laboratory service delivery requires more than the availability of equipment. Adequate numbers of appropriately trained personnel are essential for the proper operation, maintenance, documentation, and utilization of laboratory services. The existing staffing limitations therefore represent an important area requiring continued attention alongside the provision of laboratory equipment.",
          "Strengthening both human-resource capacity and laboratory infrastructure would contribute to improved diagnostic services and more effective healthcare delivery within the community."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Laboratory Provision — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Laboratory Provision — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Laboratory Investigations And Diagnostic Services",
        "paragraphs": [
          "The team assessed the range of investigations available within the laboratory units during the facility postings. The assessment showed that the facilities provided a range of routine diagnostic services, including malaria, typhoid, H. pylori, genotype testing, retroviral screening (RVS), hepatitis B and C screening (HBV and HCV), human chorionic gonadotropin (hCG) testing, VDRL, packed cell volume (PCV), blood grouping, and erythrocyte sedimentation rate (ESR).",
          "The assessment also identified gaps in laboratory equipment that could limit the scope and efficiency of diagnostic services. ECWA Clinic lacked a microhaematocrit reader, while the Primary Health Care Centre did not have an electrophoresis machine for haemoglobin genotype testing. These identified gaps informed the subsequent intervention by the COBES team, which provided a microhaematocrit reader to ECWA and an electrophoresis machine to the Primary Health Care Centre to strengthen existing diagnostic capacity.",
          "Laboratory services were also incorporated into the community health outreaches. During the second health outreach at the Primary Health Care Centre, Isale Oja, community members received screening services for conditions including malaria, typhoid, HBV alongside investigations such as blood grouping, and where applicable. Participants were provided with appropriate health information based on the services received and encouraged to seek further care from qualified healthcare professionals where necessary.",
          "Genotype testing was particularly emphasized among individuals of marriageable age and prospective couples, in view of its relevance to informed reproductive and premarital health decisions. Community members were encouraged to utilize the genotype-testing services available at the Primary Health Care Centre, thereby linking the outreach activities with continued use of the facility's laboratory services.",
          "Overall, the assessment and outreach activities demonstrated both the existing range of laboratory investigations available to the community and the equipment gaps that required strengthening, providing a basis for the laboratory-support interventions implemented by the COBES team."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Laboratory Provision — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Laboratory Provision — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Laboratory Record Keeping And Practices",
        "paragraphs": [
          "Record keeping and routine laboratory practices were assessed during the facility postings to gain insight into the organization and effectiveness of laboratory service delivery. The team considered how laboratory activities and results were documented, alongside other relevant practices within the laboratory units.",
          "The assessment provided an understanding of the strengths, limitations, and areas requiring support within the facilities. Laboratory service provision was therefore assessed as an integrated system involving equipment, investigations, personnel, documentation, and working practices, rather than considering the availability of equipment alone."
        ]
      },
      {
        "kind": "content",
        "heading": "Interventions To Strengthen Laboratory Diagnostic Services",
        "paragraphs": [
          "Following the facility assessment and identification of areas requiring additional support, the COBES team implemented interventions aimed at strengthening existing laboratory diagnostic capacity within the community. Two laboratory equipment items were provided: an electrophoresis machine to the Primary Health Care Centre and a microhaematocrit reader to ECWA.",
          "The microhaematocrit reader was handed over to ECWA to support routine haematological investigations and improve the laboratory services available to community members. The electrophoresis machine was delivered to the Primary Health Care Centre to strengthen its capacity for haemoglobin genotype testing, particularly in view of the large number of participants requiring genotype screening during the community’s annual mass-wedding programme.",
          "The laboratory intervention was further complemented by laboratory-service advocacy during the second health outreach, where community members were encouraged to utilize the diagnostic services available at the Primary Health Care Centre, including genotype testing. Through the combination of equipment provision and community sensitization, the intervention sought to strengthen both the capacity of existing laboratory services and community access to appropriate diagnostic investigations."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Laboratory Provision — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Laboratory Provision — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Community Access To Medical Laboratory Services",
        "paragraphs": [
          "The presence of laboratory services within the assessed healthcare facilities provided community members with access to diagnostic support as part of healthcare delivery. The COBES outreaches further brought screening and laboratory-related services closer to residents and provided opportunities for health education and counselling.",
          "The team also promoted appropriate use of laboratory services through sensitization. Community members were encouraged to seek care from qualified healthcare professionals and to access genotype testing, particularly where relevant to marriage planning. The outreach therefore served both a service-delivery and advocacy function."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Laboratory Provision — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Laboratory Provision — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Assessment Of The Level Of Laboratory-Service Provision",
        "paragraphs": [
          "The COBES facility assessment showed that laboratory services were available within the healthcare facilities visited and formed part of the routine services provided to the community. The assessment also demonstrated that effective laboratory service delivery depends on the combined availability of appropriate equipment, competent personnel, adequate documentation, and functional laboratory practices.",
          "However, the assessment also revealed areas requiring further strengthening, particularly in relation to equipment availability and personnel capacity. The need for additional laboratory equipment and the requirement for appropriate personnel during the commissioning of the electrophoresis machine highlighted some of the limitations affecting service capacity.Overall, based on the team’s field assessment, the laboratory-service system within the facilities can be described as existing and functional, but requiring continued strengthening. The interventions provided by the COBES team were therefore directed towards improving existing diagnostic services rather than establishing laboratory services where none previously existed."
        ]
      },
      {
        "kind": "content",
        "heading": "Medical Laboratory Services And The Who Theme",
        "paragraphs": [
          "The assessment and strengthening of laboratory services within Shao Community aligned with the WHO theme, “Together for Health, Stand with Science.” Medical laboratory services provide an important connection between scientific evidence and clinical decision-making, supporting the diagnosis, monitoring, and management of health conditions.",
          "The “Together for Health” component was demonstrated through collaboration with healthcare facilities, laboratory personnel, community members, and other stakeholders in assessing existing services and identifying areas requiring support. The provision of laboratory equipment and advocacy for the utilization of available diagnostic services further reflected a shared approach to improving community health.",
          "The “Stand with Science” component was reflected in the emphasis on laboratory investigations, screening, genotype testing, and strengthening diagnostic capacity through the provision of appropriate laboratory equipment. Overall, the activities demonstrated that effective community healthcare requires collaborative participation supported by reliable scientific and diagnostic services."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "The COBES facility assessment showed that medical laboratory services were available within the healthcare facilities visited in Shao Community, with the team assessing equipment, investigations, personnel, record keeping, and laboratory practices.",
          "The provision of a microhaematocrit reader to ECWA and an electrophoresis machine to the Primary Health Care Centre, alongside community sensitization on laboratory services, provided practical support for existing diagnostic capacity.",
          "Overall, the assessment demonstrated an existing but improvable laboratory-service system, highlighting the continued importance of strengthening equipment, personnel, and service utilization in line with the WHO theme, “Together for Health, Stand with Science.”"
        ]
      }
    ]
  },
  {
    "id": "slo-02",
    "source": "Specific MLO 2",
    "title": "Laboratory Access",
    "kind": "specific",
    "objective": "To Identify The Factors Responsible For Inacessibility Medical Laboratory Services In The Community",
    "sections": [
      {
        "heading": "Introduction",
        "paragraphs": [
          "Access to effective Medical Laboratory Services is an important component of quality healthcare because laboratory investigations provide information that supports diagnosis, treatment and disease monitoring. During the COBES programme in Shao Community, the team assessed the accessibility and utilization of Medical Laboratory Services through community mapping, questionnaire administration and visits to healthcare facilities.",
          "The questionnaire assessed residents' access to laboratory services, distance to the nearest laboratory, previous use of laboratory services, investigations performed, whether laboratory tests were requested before treatment, reasons for not completing requested tests and residents' suggestions for improving laboratory services.",
          "A total of 436 questionnaires were eventually obtained from residents across the eight areas of Shao Community. This exceeded the calculated target of 382 respondents by 54 respondents and provided information from different sections of the community."
        ]
      },
      {
        "heading": "Objectives",
        "paragraphs": [
          "The assessment aimed to:",
          "Determine the accessibility of Medical Laboratory Services within Shao Community.",
          "Identify geographical, financial and infrastructural factors limiting access to laboratory services.",
          "Identify factors affecting the utilization of available laboratory services.",
          "Assess the influence of personnel availability and waiting time on access to laboratory services.",
          "Identify behavioural and awareness-related factors contributing to underutilization of laboratory services.",
          "Identify community suggestions for improving access to Medical Laboratory Services.",
          "Develop appropriate interventions based on the barriers identified."
        ]
      },
      {
        "heading": "Methodology",
        "paragraphs": [
          "The study assessed residents' experiences with laboratory services, accessibility of available laboratories, utilization patterns, barriers to accessing requested investigations, and perceptions regarding ways of improving laboratory services in the community."
        ]
      },
      {
        "heading": "Study Design",
        "paragraphs": [
          "A descriptive community-based cross-sectional approach was used to assess factors affecting access to Medical Laboratory Services in Shao Community.",
          "Questionnaires were administered to consenting residents across eight areas of the community. The questionnaire collected information on residents' access to laboratory services, location and distance of laboratories, previous utilization of laboratory services, investigations performed, laboratory testing before treatment, reasons for not completing requested investigations and suggestions for improving laboratory services.",
          "The team also visited healthcare facilities within the community to assess laboratory personnel, equipment, investigations performed and general laboratory operations. Information obtained from the community survey was considered alongside observations from the facility assessments.",
          "A total of 436 completed questionnaires were obtained and used for the assessment."
        ]
      },
      {
        "heading": "Results",
        "paragraphs": [
          "Distance and Location of Laboratory Facilities: Distance to available laboratory facilities emerged as an important factor affecting access to Medical Laboratory Services.",
          "Some respondents reported that the nearest laboratory was more than 5 km away, while others indicated that laboratory services were within walking distance or less than 5 km from their location. Some residents specifically requested that laboratory services be provided closer to the community.",
          "The distance between residents and available laboratory facilities may discourage utilization, particularly among individuals with limited transportation options, demanding occupations or financial constraints.",
          "Cost of Laboratory Services: The cost of laboratory investigations was another factor affecting accessibility. Some respondents reported that the cost of investigations prevented them from carrying out laboratory tests, while others identified cost as a reason for not completing tests requested by healthcare workers.",
          "The financial burden may become greater when residents also have to pay for transportation to reach distant laboratory facilities. This combination of laboratory costs and transportation expenses may discourage some residents from completing recommended investigations.",
          "Inadequate Awareness of Laboratory Services: The assessment identified inadequate awareness as another factor affecting laboratory utilization.",
          "Some respondents reported that they had never visited a laboratory, did not know the location of the nearest laboratory or had limited understanding of the importance of laboratory investigations. Some residents also reported that they did not complete requested investigations because they did not consider them necessary.",
          "This indicates that the physical presence of a laboratory does not necessarily result in its effective utilization. Residents need adequate information about the services available and the role of laboratory investigations in healthcare.",
          "The team therefore incorporated laboratory advocacy into its community health activities. During the second health outreach, residents were encouraged to utilize available laboratory services, with particular emphasis on genotype testing among individuals of marriageable age and prospective couples.",
          "Inadequate Laboratory Equipment and Service Capacity: The community assessment also identified inadequate laboratory equipment and limited service capacity as factors affecting access to laboratory services.",
          "Some respondents requested improved laboratory facilities, additional equipment, more personnel and a wider range of investigations. Others specifically requested functional laboratories within the community.",
          "These findings corresponded with observations made during the team's facility assessments, where gaps in laboratory equipment and service capacity were identified.",
          "In response, the team provided a microhaematocrit reader to the ECWA laboratory and procured a haemoglobin electrophoresis machine for the Primary Health Care Centre. These interventions were intended to strengthen laboratory capacity and improve the availability of diagnostic services within the community.",
          "Inadequate Laboratory Personnel: The availability of appropriately trained personnel also affected access to laboratory services.",
          "Some respondents requested additional qualified healthcare personnel, including laboratory personnel, while others identified inadequate staffing as a factor contributing to delays in healthcare services.",
          "Inadequate personnel can affect the availability, speed and range of laboratory services provided within a facility. It can also affect the ability of facilities to utilize available laboratory equipment effectively.",
          "This was demonstrated during the team's initial attempt to commission the haemoglobin electrophoresis machine at the Primary Health Care Centre. The commissioning was postponed because the appropriate laboratory personnel was unavailable at the time. The team later returned when the appropriate personnel was available and completed the commissioning.",
          "Long Waiting Time and Delayed Turnaround Time: Waiting time and delays in receiving laboratory results were also identified as barriers.",
          "Some respondents reported waiting time as a challenge when accessing healthcare, while others specifically requested faster processing and release of laboratory results.",
          "Long waiting periods may discourage residents from utilizing laboratory services, particularly individuals whose occupations or daily responsibilities make prolonged stays at healthcare facilities difficult.",
          "Improving laboratory workflow, personnel availability and equipment can help reduce unnecessary delays and improve turnaround time.",
          "Transportation Difficulties: Transportation constituted another barrier to accessing laboratory services.",
          "Some respondents reported difficulties travelling to healthcare facilities and laboratories, while others identified transportation costs as an additional challenge.",
          "The effect of transportation becomes more significant when laboratory facilities are located several kilometres away. Therefore, laboratory accessibility depends not only on the existence of a laboratory but also on the ability of residents to reach and utilize the service.",
          "Self-Medication and Failure to Complete Requested Investigations: Behavioural practices also contributed to the underutilization of laboratory services.",
          "Some respondents reported reliance on self-medication, while others indicated that they did not complete laboratory investigations requested by healthcare workers. Reported reasons included cost, distance, lack of perceived necessity and other personal factors.",
          "Failure to complete recommended laboratory investigations may result in treatment decisions being made without adequate diagnostic information. Self-medication may further reduce the likelihood that residents will seek appropriate laboratory testing before treatment.",
          "The team therefore emphasized appropriate healthcare-seeking behaviour and the importance of obtaining healthcare from qualified professionals during its community sensitization and outreach activities.",
          "Limited Range and Availability of Laboratory Investigations: Some respondents expressed the need for laboratories to provide a wider range of investigations and improve their available services.",
          "Limited availability of specific investigations may require residents to travel outside their immediate area to access required tests. This can increase transportation costs and may contribute to delays in obtaining results.",
          "The provision of the haemoglobin electrophoresis machine to the Primary Health Care Centre was therefore relevant in improving the facility's capacity to provide haemoglobin-related investigations within the community."
        ]
      },
      {
        "heading": "Summary Of Identified Factors",
        "paragraphs": [
          "The major factors responsible for the inaccessibility or underutilization of Medical Laboratory Services identified during the assessment included:",
          "Distance to available laboratory facilities.",
          "Transportation difficulties and associated costs.",
          "Cost of laboratory investigations.",
          "Inadequate awareness of the importance of laboratory testing.",
          "Perception among some residents that laboratory testing is unnecessary.",
          "Inadequate laboratory equipment and infrastructure.",
          "Limited availability and range of laboratory investigations.",
          "Shortage of appropriate healthcare and laboratory personnel.",
          "Long waiting times and delayed release of laboratory results.",
          "Self-medication.",
          "Failure to complete requested laboratory investigations.",
          "Limited awareness of available laboratory services within the community."
        ]
      },
      {
        "heading": "Team’S Response To Identified Barriers",
        "paragraphs": [
          "The findings from the community assessment guided the team's interventions during the COBES programme.",
          "To address identified gaps in laboratory capacity, the team procured and delivered a haemoglobin electrophoresis machine to the Primary Health Care Centre, and handed over a microhaematocrit reader to the ECWA facility to support its laboratory services.",
          "In addition to equipment provision, the team conducted laboratory-focused health education during the community sensitization and health outreach activities.",
          "Residents were encouraged to understand the importance of laboratory testing and utilize available Medical Laboratory Services appropriately.",
          "Genotype testing received particular emphasis, especially among individuals of marriageable age and prospective couples.",
          "These interventions addressed both supply-side barriers, such as inadequate equipment and laboratory capacity, and demand-side barriers, including inadequate awareness and low utilization of laboratory services."
        ]
      },
      {
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on the findings, the following recommendations are proposed:",
          "Laboratory facilities should be established or strengthened in locations that are easily accessible to residents.",
          "Healthcare authorities should provide essential laboratory equipment and ensure regular maintenance of available equipment.",
          "Relevant authorities should improve the availability of qualified laboratory personnel to expand the range and efficiency of laboratory services.",
          "Healthcare facilities should work towards reducing waiting time and improving laboratory turnaround time.",
          "Community sensitization should continue to improve residents' understanding of the importance of laboratory investigations.",
          "Residents should be encouraged to complete laboratory investigations requested by qualified healthcare professionals before treatment where indicated.",
          "Healthcare workers should continue to discourage inappropriate self-medication and promote appropriate healthcare-seeking behaviour.",
          "Laboratory services should be made as affordable as possible to reduce financial barriers to appropriate testing.",
          "Healthcare facilities should improve awareness of the laboratory services they provide so that residents know where and when to access them.",
          "Community leaders and healthcare providers should collaborate on sustained advocacy for appropriate utilization of Medical Laboratory Services."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "The assessment demonstrated that several interconnected factors influence access to Medical Laboratory Services in Shao Community. Distance, transportation difficulties, cost, inadequate awareness, percei5ved lack of need for laboratory testing, inadequate equipment and personnel, limited availability of investigations, waiting time and behavioural practices such as self-medication all contributed to the inaccessibility or underutilization of laboratory services.",
          "The COBES team responded to some of these barriers through facility assessment, provision of a microhaematocrit reader, procurement and commissioning of a haemoglobin electrophoresis machine, community sensitization and advocacy for appropriate laboratory testing.",
          "The findings demonstrate that improving access to Medical Laboratory Services requires attention to both the availability of services and the ability and willingness of community members to utilize them. Strengthening laboratory capacity, improving awareness, reducing avoidable barriers and promoting appropriate healthcare-seeking behaviour will contribute to improved access to effective Medical Laboratory Services in Shao Community."
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Introduction",
        "paragraphs": [
          "Access to effective Medical Laboratory Services is an important component of quality healthcare because laboratory investigations provide information that supports diagnosis, treatment and disease monitoring. During the COBES programme in Shao Community, the team assessed the accessibility and utilization of Medical Laboratory Services through community mapping, questionnaire administration and visits to healthcare facilities.",
          "The questionnaire assessed residents' access to laboratory services, distance to the nearest laboratory, previous use of laboratory services, investigations performed, whether laboratory tests were requested before treatment, reasons for not completing requested tests and residents' suggestions for improving laboratory services.",
          "A total of 436 questionnaires were eventually obtained from residents across the eight areas of Shao Community. This exceeded the calculated target of 382 respondents by 54 respondents and provided information from different sections of the community."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Laboratory Access — field overview",
        "src": "",
        "poster": "",
        "alt": "Laboratory Access — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Objectives",
        "paragraphs": [
          "The assessment aimed to:",
          "Determine the accessibility of Medical Laboratory Services within Shao Community.",
          "Identify geographical, financial and infrastructural factors limiting access to laboratory services.",
          "Identify factors affecting the utilization of available laboratory services.",
          "Assess the influence of personnel availability and waiting time on access to laboratory services.",
          "Identify behavioural and awareness-related factors contributing to underutilization of laboratory services.",
          "Identify community suggestions for improving access to Medical Laboratory Services.",
          "Develop appropriate interventions based on the barriers identified."
        ]
      },
      {
        "kind": "content",
        "heading": "Methodology",
        "paragraphs": [
          "The study assessed residents' experiences with laboratory services, accessibility of available laboratories, utilization patterns, barriers to accessing requested investigations, and perceptions regarding ways of improving laboratory services in the community."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Laboratory Access — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Laboratory Access — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Study Design",
        "paragraphs": [
          "A descriptive community-based cross-sectional approach was used to assess factors affecting access to Medical Laboratory Services in Shao Community.",
          "Questionnaires were administered to consenting residents across eight areas of the community. The questionnaire collected information on residents' access to laboratory services, location and distance of laboratories, previous utilization of laboratory services, investigations performed, laboratory testing before treatment, reasons for not completing requested investigations and suggestions for improving laboratory services.",
          "The team also visited healthcare facilities within the community to assess laboratory personnel, equipment, investigations performed and general laboratory operations. Information obtained from the community survey was considered alongside observations from the facility assessments.",
          "A total of 436 completed questionnaires were obtained and used for the assessment."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Laboratory Access — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Laboratory Access — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Results",
        "paragraphs": [
          "Distance and Location of Laboratory Facilities: Distance to available laboratory facilities emerged as an important factor affecting access to Medical Laboratory Services.",
          "Some respondents reported that the nearest laboratory was more than 5 km away, while others indicated that laboratory services were within walking distance or less than 5 km from their location. Some residents specifically requested that laboratory services be provided closer to the community.",
          "The distance between residents and available laboratory facilities may discourage utilization, particularly among individuals with limited transportation options, demanding occupations or financial constraints.",
          "Cost of Laboratory Services: The cost of laboratory investigations was another factor affecting accessibility. Some respondents reported that the cost of investigations prevented them from carrying out laboratory tests, while others identified cost as a reason for not completing tests requested by healthcare workers.",
          "The financial burden may become greater when residents also have to pay for transportation to reach distant laboratory facilities. This combination of laboratory costs and transportation expenses may discourage some residents from completing recommended investigations.",
          "Inadequate Awareness of Laboratory Services: The assessment identified inadequate awareness as another factor affecting laboratory utilization.",
          "Some respondents reported that they had never visited a laboratory, did not know the location of the nearest laboratory or had limited understanding of the importance of laboratory investigations. Some residents also reported that they did not complete requested investigations because they did not consider them necessary.",
          "This indicates that the physical presence of a laboratory does not necessarily result in its effective utilization. Residents need adequate information about the services available and the role of laboratory investigations in healthcare.",
          "The team therefore incorporated laboratory advocacy into its community health activities. During the second health outreach, residents were encouraged to utilize available laboratory services, with particular emphasis on genotype testing among individuals of marriageable age and prospective couples.",
          "Inadequate Laboratory Equipment and Service Capacity: The community assessment also identified inadequate laboratory equipment and limited service capacity as factors affecting access to laboratory services.",
          "Some respondents requested improved laboratory facilities, additional equipment, more personnel and a wider range of investigations. Others specifically requested functional laboratories within the community.",
          "These findings corresponded with observations made during the team's facility assessments, where gaps in laboratory equipment and service capacity were identified.",
          "In response, the team provided a microhaematocrit reader to the ECWA laboratory and procured a haemoglobin electrophoresis machine for the Primary Health Care Centre. These interventions were intended to strengthen laboratory capacity and improve the availability of diagnostic services within the community.",
          "Inadequate Laboratory Personnel: The availability of appropriately trained personnel also affected access to laboratory services.",
          "Some respondents requested additional qualified healthcare personnel, including laboratory personnel, while others identified inadequate staffing as a factor contributing to delays in healthcare services.",
          "Inadequate personnel can affect the availability, speed and range of laboratory services provided within a facility. It can also affect the ability of facilities to utilize available laboratory equipment effectively.",
          "This was demonstrated during the team's initial attempt to commission the haemoglobin electrophoresis machine at the Primary Health Care Centre. The commissioning was postponed because the appropriate laboratory personnel was unavailable at the time. The team later returned when the appropriate personnel was available and completed the commissioning.",
          "Long Waiting Time and Delayed Turnaround Time: Waiting time and delays in receiving laboratory results were also identified as barriers.",
          "Some respondents reported waiting time as a challenge when accessing healthcare, while others specifically requested faster processing and release of laboratory results.",
          "Long waiting periods may discourage residents from utilizing laboratory services, particularly individuals whose occupations or daily responsibilities make prolonged stays at healthcare facilities difficult.",
          "Improving laboratory workflow, personnel availability and equipment can help reduce unnecessary delays and improve turnaround time.",
          "Transportation Difficulties: Transportation constituted another barrier to accessing laboratory services.",
          "Some respondents reported difficulties travelling to healthcare facilities and laboratories, while others identified transportation costs as an additional challenge.",
          "The effect of transportation becomes more significant when laboratory facilities are located several kilometres away. Therefore, laboratory accessibility depends not only on the existence of a laboratory but also on the ability of residents to reach and utilize the service.",
          "Self-Medication and Failure to Complete Requested Investigations: Behavioural practices also contributed to the underutilization of laboratory services.",
          "Some respondents reported reliance on self-medication, while others indicated that they did not complete laboratory investigations requested by healthcare workers. Reported reasons included cost, distance, lack of perceived necessity and other personal factors.",
          "Failure to complete recommended laboratory investigations may result in treatment decisions being made without adequate diagnostic information. Self-medication may further reduce the likelihood that residents will seek appropriate laboratory testing before treatment.",
          "The team therefore emphasized appropriate healthcare-seeking behaviour and the importance of obtaining healthcare from qualified professionals during its community sensitization and outreach activities.",
          "Limited Range and Availability of Laboratory Investigations: Some respondents expressed the need for laboratories to provide a wider range of investigations and improve their available services.",
          "Limited availability of specific investigations may require residents to travel outside their immediate area to access required tests. This can increase transportation costs and may contribute to delays in obtaining results.",
          "The provision of the haemoglobin electrophoresis machine to the Primary Health Care Centre was therefore relevant in improving the facility's capacity to provide haemoglobin-related investigations within the community."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Laboratory Access — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Laboratory Access — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Summary Of Identified Factors",
        "paragraphs": [
          "The major factors responsible for the inaccessibility or underutilization of Medical Laboratory Services identified during the assessment included:",
          "Distance to available laboratory facilities.",
          "Transportation difficulties and associated costs.",
          "Cost of laboratory investigations.",
          "Inadequate awareness of the importance of laboratory testing.",
          "Perception among some residents that laboratory testing is unnecessary.",
          "Inadequate laboratory equipment and infrastructure.",
          "Limited availability and range of laboratory investigations.",
          "Shortage of appropriate healthcare and laboratory personnel.",
          "Long waiting times and delayed release of laboratory results.",
          "Self-medication.",
          "Failure to complete requested laboratory investigations.",
          "Limited awareness of available laboratory services within the community."
        ]
      },
      {
        "kind": "content",
        "heading": "Team’S Response To Identified Barriers",
        "paragraphs": [
          "The findings from the community assessment guided the team's interventions during the COBES programme.",
          "To address identified gaps in laboratory capacity, the team procured and delivered a haemoglobin electrophoresis machine to the Primary Health Care Centre, and handed over a microhaematocrit reader to the ECWA facility to support its laboratory services.",
          "In addition to equipment provision, the team conducted laboratory-focused health education during the community sensitization and health outreach activities.",
          "Residents were encouraged to understand the importance of laboratory testing and utilize available Medical Laboratory Services appropriately.",
          "Genotype testing received particular emphasis, especially among individuals of marriageable age and prospective couples.",
          "These interventions addressed both supply-side barriers, such as inadequate equipment and laboratory capacity, and demand-side barriers, including inadequate awareness and low utilization of laboratory services."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Laboratory Access — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Laboratory Access — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on the findings, the following recommendations are proposed:",
          "Laboratory facilities should be established or strengthened in locations that are easily accessible to residents.",
          "Healthcare authorities should provide essential laboratory equipment and ensure regular maintenance of available equipment.",
          "Relevant authorities should improve the availability of qualified laboratory personnel to expand the range and efficiency of laboratory services.",
          "Healthcare facilities should work towards reducing waiting time and improving laboratory turnaround time.",
          "Community sensitization should continue to improve residents' understanding of the importance of laboratory investigations.",
          "Residents should be encouraged to complete laboratory investigations requested by qualified healthcare professionals before treatment where indicated.",
          "Healthcare workers should continue to discourage inappropriate self-medication and promote appropriate healthcare-seeking behaviour.",
          "Laboratory services should be made as affordable as possible to reduce financial barriers to appropriate testing.",
          "Healthcare facilities should improve awareness of the laboratory services they provide so that residents know where and when to access them.",
          "Community leaders and healthcare providers should collaborate on sustained advocacy for appropriate utilization of Medical Laboratory Services."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "The assessment demonstrated that several interconnected factors influence access to Medical Laboratory Services in Shao Community. Distance, transportation difficulties, cost, inadequate awareness, percei5ved lack of need for laboratory testing, inadequate equipment and personnel, limited availability of investigations, waiting time and behavioural practices such as self-medication all contributed to the inaccessibility or underutilization of laboratory services.",
          "The COBES team responded to some of these barriers through facility assessment, provision of a microhaematocrit reader, procurement and commissioning of a haemoglobin electrophoresis machine, community sensitization and advocacy for appropriate laboratory testing.",
          "The findings demonstrate that improving access to Medical Laboratory Services requires attention to both the availability of services and the ability and willingness of community members to utilize them. Strengthening laboratory capacity, improving awareness, reducing avoidable barriers and promoting appropriate healthcare-seeking behaviour will contribute to improved access to effective Medical Laboratory Services in Shao Community."
        ]
      }
    ]
  },
  {
    "id": "slo-03",
    "source": "Specific MLO 3",
    "title": "Laboratory Advocacy",
    "kind": "specific",
    "objective": "To Carry Out Sensitization And Advocacy On The Importance Of Accessing Medical Laboratory Services",
    "sections": [
      {
        "heading": "Introduction",
        "paragraphs": [
          "Medical Laboratory Services are an essential component of healthcare delivery, providing information that supports the detection, diagnosis, monitoring and management of diseases. Access to appropriate laboratory services therefore contributes to informed clinical decision-making and effective patient care.",
          "As part of our COBES activities in Shao Community, we carried out sensitization and advocacy to improve awareness of the importance of Medical Laboratory Services and encourage appropriate utilization of available laboratory facilities. The activities were conducted through community sensitization, religious institutions, health outreaches and secondary-school engagement."
        ]
      },
      {
        "heading": "Objectives",
        "paragraphs": [
          "The sensitization and advocacy activities were carried out to:",
          "Increase awareness of the importance of Medical Laboratory Services in healthcare delivery.",
          "Educate community members on the role of laboratory investigations in supporting diagnosis and patient management.",
          "Encourage appropriate healthcare-seeking behaviour and discourage self-medication and indiscriminate use of unprescribed drugs.",
          "Encourage community members to utilize available laboratory services when requested by qualified healthcare professionals.",
          "Promote genotype testing, particularly among individuals of marriageable age and prospective couples.",
          "Introduce secondary-school students to Medical Laboratory Science and the role of Medical Laboratory Scientists in healthcare delivery."
        ]
      },
      {
        "heading": "Methodology",
        "paragraphs": [
          "Information and insights for the sensitization activities were obtained through direct interaction with community members, healthcare workers and other stakeholders during our COBES activities. We also utilized information obtained from the community questionnaire survey and our assessment of the laboratory units at ECWA Clinic and Primary Health Care Centre, Shao.",
          "Sensitization was conducted using direct verbal communication, health talks, community engagement and question-and-answer interactions. Different community platforms were utilized to reach diverse groups, including community residents, worshippers and secondary-school students.",
          "During the health outreaches, sensitization was integrated with screening and counselling activities. This allowed us to provide practical explanations on the relationship between clinical assessment, laboratory investigations and appropriate patient management."
        ]
      },
      {
        "heading": "Study Design",
        "paragraphs": [
          "A community-based descriptive approach was adopted for the sensitization and advocacy activities. The approach involved direct engagement with different groups within Shao Community through community-wide sensitization, religious gatherings, health outreaches and school-based health education.",
          "The use of multiple platforms allowed us to reach different segments of the population and reinforce the importance of appropriate access to Medical Laboratory Services."
        ]
      },
      {
        "heading": "Results",
        "paragraphs": [
          "Our sensitization and advocacy activities reached community members through several platforms.",
          "Community Sensitization",
          "We conducted community-wide health sensitization across different parts of Shao Community. Residents were educated on malaria, typhoid, appropriate healthcare-seeking behaviour and the importance of Medical Laboratory Services.",
          "A major message was that individuals should not rely solely on symptoms or self-medication when they become ill. We encouraged residents to visit healthcare facilities, where qualified healthcare professionals could assess their conditions and request appropriate laboratory investigations when necessary.",
          "We also explained that laboratory results provide useful information that can support healthcare professionals in making appropriate decisions regarding patient management.",
          "Sensitization at the Mosque",
          "We conducted sensitization at the Shao Central Mosque during the Friday Juma'ah service. The mosque has a large congregation and therefore provided an important platform for reaching a substantial number of community members.",
          "The sensitization covered malaria and typhoid, preventive measures, appropriate healthcare-seeking behaviour and the importance of accessing Medical Laboratory Services.",
          "Worshippers were encouraged to avoid indiscriminate self-medication and the use of unprescribed drugs. We explained that when laboratory investigations are requested by healthcare professionals, patients should access the laboratory and use the results as part of the process of appropriate medical management.",
          "The worshippers were also informed about the health outreach and encouraged to participate.",
          "Sensitization at ECWA Churches",
          "We also utilized religious institutions within the Christian community as platforms for health education. Sensitization was conducted at First ECWA Church and Second ECWA Church.",
          "The health talks covered malaria and typhoid prevention, appropriate healthcare-seeking behaviour and the importance of seeking care from qualified healthcare professionals.",
          "The role of Medical Laboratory Services was also emphasized. Congregants were educated that laboratory investigations may be requested following clinical assessment and that such investigations can provide useful information for appropriate patient management.",
          "First Health Outreach",
          "The first major health outreach was conducted at the Aafin Ohoro of Shao and reached 89 community members.",
          "During the outreach, community members were screened for malaria and typhoid, while blood pressure measurements were also carried out. The service delivery was accompanied by health education and counselling. We used the opportunity to explain the importance of appropriate healthcare-seeking behaviour and discourage reliance on self-medication and indiscriminate use of over-the-counter or unprescribed drugs.",
          "Community members were educated on the healthcare pathway, emphasizing that individuals should seek professional medical assessment and undergo appropriate laboratory investigations when requested.",
          "Second Health Outreach",
          "The second major health outreach was conducted at the Primary Health Care Centre, Isale Oja, and reached 118 community members.",
          "The outreach included screening for malaria, typhoid and hepatitis, as well as blood grouping. Participants were also counselled and sensitized on appropriate healthcare-seeking behaviour and the importance of utilizing laboratory services.",
          "We explained that laboratory investigations should be carried out when indicated by a qualified healthcare professional and that laboratory results can provide information useful for appropriate patient management.",
          "Advocacy for Genotype Testing",
          "Genotype testing formed an important part of our laboratory-service advocacy. We educated community members, particularly individuals of marriageable age and prospective couples, on the importance of knowing their genotype.",
          "They were encouraged to access genotype testing at the Primary Health Care Centre. This demonstrated that Medical Laboratory Services are relevant not only in the investigation of illness but also in preventive health and informed decision-making.",
          "Sensitization of Secondary-School Students",
          "We also carried out sensitization among secondary-school students, reaching over 100 students.",
          "The students were introduced to Medical Laboratory Science and educated on the role of Medical Laboratory Scientists as members of the healthcare team.",
          "Using a simple patient-care process, we explained that a patient first presents to a healthcare professional for assessment. Where necessary, laboratory investigations may then be requested. The laboratory processes the appropriate specimen and provides results that can assist the healthcare professional in making clinical decisions.",
          "The students were also educated on personal hygiene and general health practices. Exercise books were distributed as part of the educational support provided during the activity.",
          "Overall Outcome and Impact",
          "The sensitization and advocacy activities provided multiple opportunities to communicate the importance of Medical Laboratory Services to different groups within Shao Community.",
          "Across the two major health outreaches alone, a total of 207 community members were reached, comprising 89 participants at the first outreach and 118 at the second outreach. In addition, over 100 secondary-school students were reached through the school-based sensitization.",
          "The engagement at the Shao Central Mosque provided access to a large congregation, while the sensitization at the two ECWA churches provided additional platforms for reaching members of the Christian community.",
          "Overall, the activities increased opportunities for community members to understand the role of laboratory investigations in healthcare, the importance of appropriate healthcare-seeking behaviour and the need to utilize available laboratory services when indicated.",
          "The advocacy for genotype testing also promoted awareness of the importance of knowing one's genotype, particularly among individuals of marriageable age and prospective couples."
        ]
      },
      {
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on our observations and interactions with community members, we recommend that:",
          "Regular community sensitization on the importance of Medical Laboratory Services should be conducted.",
          "Healthcare facilities should continue to educate patients on the purpose and importance of laboratory investigations.",
          "Community members should be encouraged to seek healthcare from qualified healthcare professionals rather than relying on self-medication.",
          "Awareness of genotype testing should be strengthened, particularly among prospective couples and individuals of marriageable age.",
          "Religious institutions and schools should continue to be utilized as platforms for health education and laboratory-service advocacy.",
          "Available laboratory facilities and equipment within the community should be adequately maintained and utilized to improve access to diagnostic services.",
          "Continuous collaboration between healthcare facilities, community leaders, religious institutions and health workers should be encouraged to sustain community health education."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "The sensitization and advocacy activities increased awareness among community members, worshippers, and students about the importance of Medical Laboratory Services and appropriate healthcare-seeking behaviour. The activities also promoted the use of laboratory investigations when indicated and encouraged genotype testing among prospective couples. In summary, the interventions provided a valuable platform for improving awareness and appropriate utilization of laboratory services in Shao Community."
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Introduction",
        "paragraphs": [
          "Medical Laboratory Services are an essential component of healthcare delivery, providing information that supports the detection, diagnosis, monitoring and management of diseases. Access to appropriate laboratory services therefore contributes to informed clinical decision-making and effective patient care.",
          "As part of our COBES activities in Shao Community, we carried out sensitization and advocacy to improve awareness of the importance of Medical Laboratory Services and encourage appropriate utilization of available laboratory facilities. The activities were conducted through community sensitization, religious institutions, health outreaches and secondary-school engagement."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Laboratory Advocacy — field overview",
        "src": "",
        "poster": "",
        "alt": "Laboratory Advocacy — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Objectives",
        "paragraphs": [
          "The sensitization and advocacy activities were carried out to:",
          "Increase awareness of the importance of Medical Laboratory Services in healthcare delivery.",
          "Educate community members on the role of laboratory investigations in supporting diagnosis and patient management.",
          "Encourage appropriate healthcare-seeking behaviour and discourage self-medication and indiscriminate use of unprescribed drugs.",
          "Encourage community members to utilize available laboratory services when requested by qualified healthcare professionals.",
          "Promote genotype testing, particularly among individuals of marriageable age and prospective couples.",
          "Introduce secondary-school students to Medical Laboratory Science and the role of Medical Laboratory Scientists in healthcare delivery."
        ]
      },
      {
        "kind": "content",
        "heading": "Methodology",
        "paragraphs": [
          "Information and insights for the sensitization activities were obtained through direct interaction with community members, healthcare workers and other stakeholders during our COBES activities. We also utilized information obtained from the community questionnaire survey and our assessment of the laboratory units at ECWA Clinic and Primary Health Care Centre, Shao.",
          "Sensitization was conducted using direct verbal communication, health talks, community engagement and question-and-answer interactions. Different community platforms were utilized to reach diverse groups, including community residents, worshippers and secondary-school students.",
          "During the health outreaches, sensitization was integrated with screening and counselling activities. This allowed us to provide practical explanations on the relationship between clinical assessment, laboratory investigations and appropriate patient management."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Laboratory Advocacy — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Laboratory Advocacy — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Study Design",
        "paragraphs": [
          "A community-based descriptive approach was adopted for the sensitization and advocacy activities. The approach involved direct engagement with different groups within Shao Community through community-wide sensitization, religious gatherings, health outreaches and school-based health education.",
          "The use of multiple platforms allowed us to reach different segments of the population and reinforce the importance of appropriate access to Medical Laboratory Services."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Laboratory Advocacy — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Laboratory Advocacy — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Results",
        "paragraphs": [
          "Our sensitization and advocacy activities reached community members through several platforms.",
          "Community Sensitization",
          "We conducted community-wide health sensitization across different parts of Shao Community. Residents were educated on malaria, typhoid, appropriate healthcare-seeking behaviour and the importance of Medical Laboratory Services.",
          "A major message was that individuals should not rely solely on symptoms or self-medication when they become ill. We encouraged residents to visit healthcare facilities, where qualified healthcare professionals could assess their conditions and request appropriate laboratory investigations when necessary.",
          "We also explained that laboratory results provide useful information that can support healthcare professionals in making appropriate decisions regarding patient management.",
          "Sensitization at the Mosque",
          "We conducted sensitization at the Shao Central Mosque during the Friday Juma'ah service. The mosque has a large congregation and therefore provided an important platform for reaching a substantial number of community members.",
          "The sensitization covered malaria and typhoid, preventive measures, appropriate healthcare-seeking behaviour and the importance of accessing Medical Laboratory Services.",
          "Worshippers were encouraged to avoid indiscriminate self-medication and the use of unprescribed drugs. We explained that when laboratory investigations are requested by healthcare professionals, patients should access the laboratory and use the results as part of the process of appropriate medical management.",
          "The worshippers were also informed about the health outreach and encouraged to participate.",
          "Sensitization at ECWA Churches",
          "We also utilized religious institutions within the Christian community as platforms for health education. Sensitization was conducted at First ECWA Church and Second ECWA Church.",
          "The health talks covered malaria and typhoid prevention, appropriate healthcare-seeking behaviour and the importance of seeking care from qualified healthcare professionals.",
          "The role of Medical Laboratory Services was also emphasized. Congregants were educated that laboratory investigations may be requested following clinical assessment and that such investigations can provide useful information for appropriate patient management.",
          "First Health Outreach",
          "The first major health outreach was conducted at the Aafin Ohoro of Shao and reached 89 community members.",
          "During the outreach, community members were screened for malaria and typhoid, while blood pressure measurements were also carried out. The service delivery was accompanied by health education and counselling. We used the opportunity to explain the importance of appropriate healthcare-seeking behaviour and discourage reliance on self-medication and indiscriminate use of over-the-counter or unprescribed drugs.",
          "Community members were educated on the healthcare pathway, emphasizing that individuals should seek professional medical assessment and undergo appropriate laboratory investigations when requested.",
          "Second Health Outreach",
          "The second major health outreach was conducted at the Primary Health Care Centre, Isale Oja, and reached 118 community members.",
          "The outreach included screening for malaria, typhoid and hepatitis, as well as blood grouping. Participants were also counselled and sensitized on appropriate healthcare-seeking behaviour and the importance of utilizing laboratory services.",
          "We explained that laboratory investigations should be carried out when indicated by a qualified healthcare professional and that laboratory results can provide information useful for appropriate patient management.",
          "Advocacy for Genotype Testing",
          "Genotype testing formed an important part of our laboratory-service advocacy. We educated community members, particularly individuals of marriageable age and prospective couples, on the importance of knowing their genotype.",
          "They were encouraged to access genotype testing at the Primary Health Care Centre. This demonstrated that Medical Laboratory Services are relevant not only in the investigation of illness but also in preventive health and informed decision-making.",
          "Sensitization of Secondary-School Students",
          "We also carried out sensitization among secondary-school students, reaching over 100 students.",
          "The students were introduced to Medical Laboratory Science and educated on the role of Medical Laboratory Scientists as members of the healthcare team.",
          "Using a simple patient-care process, we explained that a patient first presents to a healthcare professional for assessment. Where necessary, laboratory investigations may then be requested. The laboratory processes the appropriate specimen and provides results that can assist the healthcare professional in making clinical decisions.",
          "The students were also educated on personal hygiene and general health practices. Exercise books were distributed as part of the educational support provided during the activity.",
          "Overall Outcome and Impact",
          "The sensitization and advocacy activities provided multiple opportunities to communicate the importance of Medical Laboratory Services to different groups within Shao Community.",
          "Across the two major health outreaches alone, a total of 207 community members were reached, comprising 89 participants at the first outreach and 118 at the second outreach. In addition, over 100 secondary-school students were reached through the school-based sensitization.",
          "The engagement at the Shao Central Mosque provided access to a large congregation, while the sensitization at the two ECWA churches provided additional platforms for reaching members of the Christian community.",
          "Overall, the activities increased opportunities for community members to understand the role of laboratory investigations in healthcare, the importance of appropriate healthcare-seeking behaviour and the need to utilize available laboratory services when indicated.",
          "The advocacy for genotype testing also promoted awareness of the importance of knowing one's genotype, particularly among individuals of marriageable age and prospective couples."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Laboratory Advocacy — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Laboratory Advocacy — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on our observations and interactions with community members, we recommend that:",
          "Regular community sensitization on the importance of Medical Laboratory Services should be conducted.",
          "Healthcare facilities should continue to educate patients on the purpose and importance of laboratory investigations.",
          "Community members should be encouraged to seek healthcare from qualified healthcare professionals rather than relying on self-medication.",
          "Awareness of genotype testing should be strengthened, particularly among prospective couples and individuals of marriageable age.",
          "Religious institutions and schools should continue to be utilized as platforms for health education and laboratory-service advocacy.",
          "Available laboratory facilities and equipment within the community should be adequately maintained and utilized to improve access to diagnostic services.",
          "Continuous collaboration between healthcare facilities, community leaders, religious institutions and health workers should be encouraged to sustain community health education."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "The sensitization and advocacy activities increased awareness among community members, worshippers, and students about the importance of Medical Laboratory Services and appropriate healthcare-seeking behaviour. The activities also promoted the use of laboratory investigations when indicated and encouraged genotype testing among prospective couples. In summary, the interventions provided a valuable platform for improving awareness and appropriate utilization of laboratory services in Shao Community."
        ]
      }
    ]
  },
  {
    "id": "slo-04",
    "source": "Specific MLO 4",
    "title": "Patient Rights",
    "kind": "specific",
    "objective": "To Emphasize The Right Of Patients To Access Effective Medical Laboratory Services Before Treatment Is Administered",
    "sections": [
      {
        "heading": "Introduction",
        "paragraphs": [
          "Medical laboratory services form an important part of healthcare delivery because laboratory investigations provide objective information that assists healthcare professionals in detecting, diagnosing, monitoring and managing diseases. Where laboratory investigation is clinically indicated, access to reliable testing enables healthcare providers to make more informed decisions and provide appropriate care.",
          "During our Community-Based Experience and Services (COBES) programme in Shao Community, we identified the need to improve community awareness and utilization of medical laboratory services. We observed that although laboratory services were available in some healthcare facilities within the community, their utilization was relatively low. We therefore used facility assessments, community sensitization programmes, health outreaches, advocacy and laboratory-support interventions to emphasize the importance of appropriate laboratory investigation in patient care.",
          "We emphasized that patients should have the opportunity to access appropriate laboratory investigations when such investigations are clinically indicated. We also discouraged reliance on self-diagnosis, assumptions based solely on symptoms and indiscriminate self-medication. However, we clarified that laboratory testing is not required before treatment for every illness. Rather, where an investigation is necessary to support a clinical decision, patients should have access to the appropriate test and qualified personnel should be available to perform and interpret it."
        ]
      },
      {
        "heading": "Objectives",
        "paragraphs": [
          "The objectives of this MLO were to:",
          "Emphasize the importance of effective medical laboratory services in the diagnosis, monitoring and management of diseases.",
          "Educate community members on their right to access appropriate laboratory investigations when clinically indicated.",
          "Assess the availability, accessibility and utilization of laboratory services within selected healthcare facilities in Shao Community.",
          "Identify limitations in laboratory personnel, equipment, materials and diagnostic capacity.",
          "Encourage community members to utilize available laboratory services rather than relying on self-medication or self-diagnosis.",
          "Promote genotype testing among community members, particularly individuals of marriageable age and prospective couples.",
          "Demonstrate the practical importance of laboratory investigations through community health outreaches and screening activities.",
          "Support the improvement of laboratory capacity in healthcare facilities through the provision and commissioning of relevant laboratory equipment.",
          "Encourage patients to seek appropriate medical evaluation and follow professional recommendations regarding laboratory investigations."
        ]
      },
      {
        "heading": "Methodology",
        "paragraphs": [
          "We achieved this MLO through a combination of healthcare-facility assessment, direct observation, interaction with healthcare workers, community sensitization, health education, health outreaches and laboratory-support activities.",
          "We visited the laboratory units of the healthcare facilities within the community, particularly the ECWA Clinic and the Primary Health Care Centre. During these visits, we interacted with available healthcare and laboratory personnel and assessed the available equipment, personnel, investigations performed, laboratory operations and general capacity of the facilities.",
          "We also engaged community members during sensitization programmes and health outreaches. We used these opportunities to explain the role of laboratory investigations in healthcare and encouraged residents to seek appropriate medical evaluation rather than depending on self-medication.",
          "We provided laboratory-related services during the health outreaches, including malaria, typhoid and hepatitis screening and blood grouping. We also performed blood pressure checks as part of the general health assessment and provided counselling and referral where necessary.",
          "In addition, we supported laboratory capacity development by procuring and providing a haemoglobin electrophoresis machine to the Primary Health Care Centre and a microhaematocrit reader to the ECWA facility. We subsequently returned to the Primary Health Care Centre on 17 August 2026, when the haemoglobin electrophoresis machine was successfully commissioned."
        ]
      },
      {
        "heading": "Study Design",
        "paragraphs": [
          "We adopted a community-based descriptive approach for this MLO. We assessed the availability and utilization of medical laboratory services within selected healthcare facilities and observed how community members accessed and utilized these services.",
          "We obtained information through direct observation during our laboratory postings, interaction with healthcare workers, facility assessment and engagement with community members during sensitization programmes and health outreaches.",
          "This approach allowed us to identify existing strengths and limitations in laboratory service delivery and to relate these findings to the community's healthcare needs."
        ]
      },
      {
        "heading": "Results",
        "paragraphs": [
          "After the studies and observations was carried out, the following inferences were obtained:",
          "Availability and Utilization of Laboratory Services",
          "Our assessment showed that laboratory services were available in the healthcare facilities visited, but their utilization within the community was relatively low. We were informed that approximately two patients accessed the laboratory per day at the facility assessed.",
          "This low level of utilization highlighted the need for increased community awareness about the role of laboratory investigations in healthcare. We observed that the presence of a laboratory alone does not guarantee effective access to laboratory services. Adequate personnel, functional equipment, appropriate reagents, proper procedures and community awareness are also necessary."
        ]
      },
      {
        "heading": "Laboratory Personnel",
        "paragraphs": [
          "During our assessment, we found that Medical Laboratory Technicians were available at the Primary Health Care Centre. However, the facility did not have a Medical Laboratory Scientist.",
          "This limitation affected the level of laboratory capacity available at the facility. We recognized that improving laboratory services requires not only the provision of equipment but also the availability of appropriately trained personnel who can operate equipment, perform investigations, maintain quality standards and contribute to effective laboratory service delivery."
        ]
      },
      {
        "heading": "Laboratory Equipment And Diagnostic Capacity",
        "paragraphs": [
          "We identified limitations in the laboratory equipment available at the healthcare facilities. To contribute to improving this situation, we provided a haemoglobin electrophoresis machine to the Primary Health Care Centre.",
          "The equipment could not be commissioned during our initial visit because the appropriate laboratory personnel was unavailable. We subsequently returned to the facility on 17 August 2026, and we successfully commissioned the machine.",
          "We also provided a microhaematocrit reader to the ECWA facility to strengthen its capacity for laboratory investigations.",
          "These interventions were intended to improve the availability of relevant investigations within Shao Community and reduce the need for residents to travel outside the community for certain laboratory services."
        ]
      },
      {
        "heading": "Laboratory Services During The First Health Outreach",
        "paragraphs": [
          "During our first major health outreach, we screened community members for malaria and typhoid and also carried out blood pressure measurements.",
          "We used the screening exercise to demonstrate the practical value of laboratory services to community members. We counselled participants based on their findings and referred individuals with concerning results for further medical evaluation and management where necessary.",
          "The outreach provided an opportunity for us to move beyond explaining laboratory services theoretically and demonstrate how laboratory investigations can contribute to healthcare decisions."
        ]
      },
      {
        "heading": "Laboratory Services During The Second Major Health Outreach",
        "paragraphs": [
          "During the second major health outreach held at the Primary Health Care Centre in Isale Oja, we provided screening services for malaria, typhoid and hepatitis, as well as blood grouping.",
          "The outreach attracted a large number of community members and created an opportunity for us to educate residents about the importance of laboratory investigations. We provided counselling and health education based on the services offered and encouraged participants to seek further medical assessment when necessary.",
          "The outreach also demonstrated that bringing laboratory-related services closer to the community can encourage utilization and improve awareness of available healthcare services.",
          "Advocacy for Genotype Testing",
          "We specifically emphasized the importance of genotype testing during our community sensitization activities. We encouraged young adults, individuals of marriageable age and prospective couples to know their genotype status and to access genotype testing at the Primary Health Care Centre.",
          "We explained that knowing one's genotype can provide useful information for reproductive and genetic counselling. We encouraged community members to make use of the available laboratory services rather than relying on assumptions about their genotype or information obtained from other sources without appropriate testing.",
          "Advocacy Against Self-Medication",
          "We also used our community sensitization activities to discourage self-medication and self-diagnosis. We explained that similar symptoms may occur in different diseases and that symptoms alone may not always provide enough information to determine the underlying cause.",
          "We therefore encouraged residents to seek appropriate medical evaluation and follow the recommendations of qualified healthcare professionals. Where laboratory investigation was indicated, we emphasized that patients should be able to access the appropriate test before a definitive treatment decision is made."
        ]
      },
      {
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on our findings and observations, we recommend the following:",
          "Increase community awareness: Regular health education programmes should be organized to educate residents about the importance of laboratory investigations and the laboratory services available within the community.",
          "Improve laboratory staffing: The Primary Health Care Centre should be supported with additional qualified laboratory personnel, particularly Medical Laboratory Scientists, to strengthen the range and quality of laboratory services provided.",
          "Provide adequate laboratory equipment and materials: Healthcare facilities should be supplied with appropriate and functional laboratory equipment, reagents and consumables to improve diagnostic capacity.",
          "Maintain donated equipment: The haemoglobin electrophoresis machine and microhaematocrit reader provided during the COBES programme should be properly maintained and routinely serviced to ensure continued functionality.",
          "Improve laboratory utilization: Healthcare workers should continue to encourage patients to utilize laboratory services whenever investigations are clinically indicated.",
          "Promote genotype testing: Continuous sensitization should be conducted, particularly among adolescents, young adults and prospective couples, to encourage appropriate genotype testing and counselling.",
          "Strengthen referral systems: Patients whose required investigations or treatments are unavailable within the community should be appropriately referred to facilities with the necessary personnel, equipment and expertise.",
          "Improve record keeping: Laboratory units should maintain accurate and up-to-date records of investigations performed, equipment utilization and patient attendance. Reliable records can help facilities identify service gaps and plan improvements.",
          "Discourage self-medication: Community health education should continue to address the risks associated with self-medication and encourage residents to seek professional medical evaluation before using medications.",
          "Sustain community outreach services: Periodic health outreaches should be organized to bring basic screening and health education services closer to residents, particularly those who may not routinely visit healthcare facilities."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "Through this MLO, we emphasized that effective medical laboratory services are an important component of quality healthcare and that patients should have access to appropriate laboratory investigations whenever they are clinically indicated.",
          "Our facility assessments revealed limitations in laboratory personnel, equipment and utilization. We responded to some of these identified needs by providing a haemoglobin electrophoresis machine to the Primary Health Care Centre and a microhaematocrit reader to the ECWA facility. We also successfully commissioned the haemoglobin electrophoresis machine on 17 August 2026 after the initial commissioning attempt was delayed by the absence of the appropriate laboratory personnel.",
          "Our health outreaches allowed us to provide malaria, typhoid and hepatitis screening and blood grouping while simultaneously educating community members about the role of laboratory investigations in healthcare. We also promoted genotype testing and discouraged self-medication and self-diagnosis.",
          "From these findings, we learned that improving access to medical laboratory services requires a combination of community awareness, qualified personnel, functional equipment, adequate supplies, proper documentation and effective utilization. By strengthening these areas, Shao Community can improve access to diagnostic services and support more informed healthcare decisions and better health outcomes."
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Introduction",
        "paragraphs": [
          "Medical laboratory services form an important part of healthcare delivery because laboratory investigations provide objective information that assists healthcare professionals in detecting, diagnosing, monitoring and managing diseases. Where laboratory investigation is clinically indicated, access to reliable testing enables healthcare providers to make more informed decisions and provide appropriate care.",
          "During our Community-Based Experience and Services (COBES) programme in Shao Community, we identified the need to improve community awareness and utilization of medical laboratory services. We observed that although laboratory services were available in some healthcare facilities within the community, their utilization was relatively low. We therefore used facility assessments, community sensitization programmes, health outreaches, advocacy and laboratory-support interventions to emphasize the importance of appropriate laboratory investigation in patient care.",
          "We emphasized that patients should have the opportunity to access appropriate laboratory investigations when such investigations are clinically indicated. We also discouraged reliance on self-diagnosis, assumptions based solely on symptoms and indiscriminate self-medication. However, we clarified that laboratory testing is not required before treatment for every illness. Rather, where an investigation is necessary to support a clinical decision, patients should have access to the appropriate test and qualified personnel should be available to perform and interpret it."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Patient Rights — field overview",
        "src": "",
        "poster": "",
        "alt": "Patient Rights — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Objectives",
        "paragraphs": [
          "The objectives of this MLO were to:",
          "Emphasize the importance of effective medical laboratory services in the diagnosis, monitoring and management of diseases.",
          "Educate community members on their right to access appropriate laboratory investigations when clinically indicated.",
          "Assess the availability, accessibility and utilization of laboratory services within selected healthcare facilities in Shao Community.",
          "Identify limitations in laboratory personnel, equipment, materials and diagnostic capacity.",
          "Encourage community members to utilize available laboratory services rather than relying on self-medication or self-diagnosis.",
          "Promote genotype testing among community members, particularly individuals of marriageable age and prospective couples.",
          "Demonstrate the practical importance of laboratory investigations through community health outreaches and screening activities.",
          "Support the improvement of laboratory capacity in healthcare facilities through the provision and commissioning of relevant laboratory equipment.",
          "Encourage patients to seek appropriate medical evaluation and follow professional recommendations regarding laboratory investigations."
        ]
      },
      {
        "kind": "content",
        "heading": "Methodology",
        "paragraphs": [
          "We achieved this MLO through a combination of healthcare-facility assessment, direct observation, interaction with healthcare workers, community sensitization, health education, health outreaches and laboratory-support activities.",
          "We visited the laboratory units of the healthcare facilities within the community, particularly the ECWA Clinic and the Primary Health Care Centre. During these visits, we interacted with available healthcare and laboratory personnel and assessed the available equipment, personnel, investigations performed, laboratory operations and general capacity of the facilities.",
          "We also engaged community members during sensitization programmes and health outreaches. We used these opportunities to explain the role of laboratory investigations in healthcare and encouraged residents to seek appropriate medical evaluation rather than depending on self-medication.",
          "We provided laboratory-related services during the health outreaches, including malaria, typhoid and hepatitis screening and blood grouping. We also performed blood pressure checks as part of the general health assessment and provided counselling and referral where necessary.",
          "In addition, we supported laboratory capacity development by procuring and providing a haemoglobin electrophoresis machine to the Primary Health Care Centre and a microhaematocrit reader to the ECWA facility. We subsequently returned to the Primary Health Care Centre on 17 August 2026, when the haemoglobin electrophoresis machine was successfully commissioned."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Patient Rights — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Patient Rights — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Study Design",
        "paragraphs": [
          "We adopted a community-based descriptive approach for this MLO. We assessed the availability and utilization of medical laboratory services within selected healthcare facilities and observed how community members accessed and utilized these services.",
          "We obtained information through direct observation during our laboratory postings, interaction with healthcare workers, facility assessment and engagement with community members during sensitization programmes and health outreaches.",
          "This approach allowed us to identify existing strengths and limitations in laboratory service delivery and to relate these findings to the community's healthcare needs."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Patient Rights — fieldwork process",
        "src": "",
        "poster": "",
        "alt": "Patient Rights — fieldwork process",
        "description": "Place a short fieldwork/process video here when available."
      },
      {
        "kind": "content",
        "heading": "Results",
        "paragraphs": [
          "After the studies and observations was carried out, the following inferences were obtained:",
          "Availability and Utilization of Laboratory Services",
          "Our assessment showed that laboratory services were available in the healthcare facilities visited, but their utilization within the community was relatively low. We were informed that approximately two patients accessed the laboratory per day at the facility assessed.",
          "This low level of utilization highlighted the need for increased community awareness about the role of laboratory investigations in healthcare. We observed that the presence of a laboratory alone does not guarantee effective access to laboratory services. Adequate personnel, functional equipment, appropriate reagents, proper procedures and community awareness are also necessary."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Patient Rights — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Patient Rights — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Laboratory Personnel",
        "paragraphs": [
          "During our assessment, we found that Medical Laboratory Technicians were available at the Primary Health Care Centre. However, the facility did not have a Medical Laboratory Scientist.",
          "This limitation affected the level of laboratory capacity available at the facility. We recognized that improving laboratory services requires not only the provision of equipment but also the availability of appropriately trained personnel who can operate equipment, perform investigations, maintain quality standards and contribute to effective laboratory service delivery."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Patient Rights — assessment evidence",
        "src": "",
        "poster": "",
        "alt": "Patient Rights — assessment evidence",
        "description": "Place a relevant photograph, chart, map or evidence image here."
      },
      {
        "kind": "content",
        "heading": "Laboratory Equipment And Diagnostic Capacity",
        "paragraphs": [
          "We identified limitations in the laboratory equipment available at the healthcare facilities. To contribute to improving this situation, we provided a haemoglobin electrophoresis machine to the Primary Health Care Centre.",
          "The equipment could not be commissioned during our initial visit because the appropriate laboratory personnel was unavailable. We subsequently returned to the facility on 17 August 2026, and we successfully commissioned the machine.",
          "We also provided a microhaematocrit reader to the ECWA facility to strengthen its capacity for laboratory investigations.",
          "These interventions were intended to improve the availability of relevant investigations within Shao Community and reduce the need for residents to travel outside the community for certain laboratory services."
        ]
      },
      {
        "kind": "content",
        "heading": "Laboratory Services During The First Health Outreach",
        "paragraphs": [
          "During our first major health outreach, we screened community members for malaria and typhoid and also carried out blood pressure measurements.",
          "We used the screening exercise to demonstrate the practical value of laboratory services to community members. We counselled participants based on their findings and referred individuals with concerning results for further medical evaluation and management where necessary.",
          "The outreach provided an opportunity for us to move beyond explaining laboratory services theoretically and demonstrate how laboratory investigations can contribute to healthcare decisions."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Patient Rights — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Patient Rights — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Laboratory Services During The Second Major Health Outreach",
        "paragraphs": [
          "During the second major health outreach held at the Primary Health Care Centre in Isale Oja, we provided screening services for malaria, typhoid and hepatitis, as well as blood grouping.",
          "The outreach attracted a large number of community members and created an opportunity for us to educate residents about the importance of laboratory investigations. We provided counselling and health education based on the services offered and encouraged participants to seek further medical assessment when necessary.",
          "The outreach also demonstrated that bringing laboratory-related services closer to the community can encourage utilization and improve awareness of available healthcare services.",
          "Advocacy for Genotype Testing",
          "We specifically emphasized the importance of genotype testing during our community sensitization activities. We encouraged young adults, individuals of marriageable age and prospective couples to know their genotype status and to access genotype testing at the Primary Health Care Centre.",
          "We explained that knowing one's genotype can provide useful information for reproductive and genetic counselling. We encouraged community members to make use of the available laboratory services rather than relying on assumptions about their genotype or information obtained from other sources without appropriate testing.",
          "Advocacy Against Self-Medication",
          "We also used our community sensitization activities to discourage self-medication and self-diagnosis. We explained that similar symptoms may occur in different diseases and that symptoms alone may not always provide enough information to determine the underlying cause.",
          "We therefore encouraged residents to seek appropriate medical evaluation and follow the recommendations of qualified healthcare professionals. Where laboratory investigation was indicated, we emphasized that patients should be able to access the appropriate test before a definitive treatment decision is made."
        ]
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Patient Rights — activity evidence",
        "src": "",
        "poster": "",
        "alt": "Patient Rights — activity evidence",
        "description": "Place a relevant activity/outreach/intervention video here."
      },
      {
        "kind": "content",
        "heading": "Recommendations And Suggestions",
        "paragraphs": [
          "Based on our findings and observations, we recommend the following:",
          "Increase community awareness: Regular health education programmes should be organized to educate residents about the importance of laboratory investigations and the laboratory services available within the community.",
          "Improve laboratory staffing: The Primary Health Care Centre should be supported with additional qualified laboratory personnel, particularly Medical Laboratory Scientists, to strengthen the range and quality of laboratory services provided.",
          "Provide adequate laboratory equipment and materials: Healthcare facilities should be supplied with appropriate and functional laboratory equipment, reagents and consumables to improve diagnostic capacity.",
          "Maintain donated equipment: The haemoglobin electrophoresis machine and microhaematocrit reader provided during the COBES programme should be properly maintained and routinely serviced to ensure continued functionality.",
          "Improve laboratory utilization: Healthcare workers should continue to encourage patients to utilize laboratory services whenever investigations are clinically indicated.",
          "Promote genotype testing: Continuous sensitization should be conducted, particularly among adolescents, young adults and prospective couples, to encourage appropriate genotype testing and counselling.",
          "Strengthen referral systems: Patients whose required investigations or treatments are unavailable within the community should be appropriately referred to facilities with the necessary personnel, equipment and expertise.",
          "Improve record keeping: Laboratory units should maintain accurate and up-to-date records of investigations performed, equipment utilization and patient attendance. Reliable records can help facilities identify service gaps and plan improvements.",
          "Discourage self-medication: Community health education should continue to address the risks associated with self-medication and encourage residents to seek professional medical evaluation before using medications.",
          "Sustain community outreach services: Periodic health outreaches should be organized to bring basic screening and health education services closer to residents, particularly those who may not routinely visit healthcare facilities."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "Through this MLO, we emphasized that effective medical laboratory services are an important component of quality healthcare and that patients should have access to appropriate laboratory investigations whenever they are clinically indicated.",
          "Our facility assessments revealed limitations in laboratory personnel, equipment and utilization. We responded to some of these identified needs by providing a haemoglobin electrophoresis machine to the Primary Health Care Centre and a microhaematocrit reader to the ECWA facility. We also successfully commissioned the haemoglobin electrophoresis machine on 17 August 2026 after the initial commissioning attempt was delayed by the absence of the appropriate laboratory personnel.",
          "Our health outreaches allowed us to provide malaria, typhoid and hepatitis screening and blood grouping while simultaneously educating community members about the role of laboratory investigations in healthcare. We also promoted genotype testing and discouraged self-medication and self-diagnosis.",
          "From these findings, we learned that improving access to medical laboratory services requires a combination of community awareness, qualified personnel, functional equipment, adequate supplies, proper documentation and effective utilization. By strengthening these areas, Shao Community can improve access to diagnostic services and support more informed healthcare decisions and better health outcomes."
        ]
      }
    ]
  },
  {
    "id": "skill-01",
    "source": "Optional Study",
    "title": "Skill Acquisition",
    "kind": "optional",
    "objective": "Optional Studies: Skill Acquisition",
    "sections": [
      {
        "heading": "Skill Acquisition During The Cobes Posting",
        "paragraphs": [
          "As part of the Optional Studies component of the COBES programme, the team participated in a practical skill-acquisition activity in Shao Community on Wednesday, 12th of August 2026. The activity was aimed at exposing students to selected indigenous occupations and food-processing practices carried out by members of the community.",
          "The team was divided into three groups, with each group assigned to a different production activity. One group participated in Garri production, another in Orunla production, while the third participated in Beske production. The groups visited the respective production sites, interacted directly with local producers, observed the various stages of production, and participated in selected aspects of the processes.",
          "The activity provided an opportunity to acquire firsthand knowledge of traditional production methods and to appreciate the labour, skills, resources and time involved in transforming locally available agricultural products into consumable products. It also provided insight into the role of these activities as sources of livelihood for members of the community."
        ]
      },
      {
        "heading": "Garri Production",
        "paragraphs": [
          "The group assigned to garri production visited a local garri-processing site, where we were introduced to the process of converting cassava into garri.",
          "The various stages observed and participated in are outlined below.",
          "Step 1: Selection and peeling of cassava",
          "The cassava tubers were selected and peeled to remove the outer covering. The peeled tubers were subsequently prepared for further processing.",
          "Step 2: Washing",
          "The peeled cassava tubers were thoroughly washed to remove dirt and other unwanted materials from their surfaces.",
          "Step 3: Grating or Grinding",
          "The washed cassava was grated to produce a wet cassava pulp. This stage reduces the cassava into a form suitable for subsequent processing.",
          "Step 4: Fermentation",
          "The grated cassava pulp was allowed to undergo fermentation. This stage forms part of the traditional processing method used in gari production.",
          "Step 5: Pressing",
          "Following fermentation, the cassava pulp was pressed to remove excess water. The pressing process reduces the moisture content of the pulp and prepares it for the next stage.",
          "Step 6: Sieving",
          "The pressed cassava was sieved to break up lumps and obtain a relatively uniform texture suitable for frying.",
          "Step 7: Frying",
          "The sieved cassava mash was placed in a large frying pan over a fire. It was continuously stirred during frying to ensure even heating and prevent the product from burning.",
          "Step 8: Final product",
          "After adequate frying, the processed cassava formed gari, which was then allowed to cool and was prepared for consumption or storage.",
          "Participation in the process provided an appreciation of the skill, time and physical effort required for garri production.",
          "We also observed occupational conditions at the processing site. In particular, cassava grinding generated particles and dust, which could come into contact with workers' eyes during repeated processing activities. This observation informed the consideration of protective safety glasses as a possible occupational-health intervention for the identified gari-processing sites."
        ]
      },
      {
        "heading": "Orunla Production",
        "paragraphs": [
          "The second group participated in the production of orunla, a traditional food product made from dried okra.",
          "The activity was carried out at a local production site, where we interacted with the women involved in the production and participated in the various stages.",
          "Step 1: Preparation of okra",
          "The okra was prepared for processing and sliced into smaller pieces.",
          "Step 2: Slicing",
          "The okra was cut into smaller pieces to facilitate effective drying.",
          "Step 3: Drying",
          "The sliced okra was spread out and exposed to sunlight. It was allowed to dry until sufficient moisture had been removed.",
          "Step 4: Grinding",
          "The dried okra was taken for grinding to produce the final orunla product.",
          "Step 5: Packaging and preservation",
          "The finished product was prepared for storage and subsequent use or sale.",
          "The activity provided practical knowledge of traditional food-processing methods and demonstrated how locally available food products can be preserved through drying and further processing.",
          "We also observed the importance of maintaining cleanliness during food preparation, drying and grinding to minimize contamination of the finished product. The interaction with the producers further demonstrated that orunla production serves as both a traditional food-processing practice and a source of livelihood for members of the community involved in its production and sale."
        ]
      },
      {
        "heading": "Beske Production",
        "paragraphs": [
          "The third group participated in beske production. The activity provided an opportunity to learn directly from local producers about the processing of soybeans into a ready-to-eat product.",
          "Step 1: Sorting and cleaning",
          "The soybeans were sorted to remove unwanted materials and cleaned in preparation for further processing.",
          "Step 2: Soaking",
          "The cleaned soybeans were soaked to soften them and make them suitable for subsequent processing.",
          "Step 3: Grinding",
          "The soaked soybeans were ground to produce a soybean mixture.",
          "Step 4: Processing of the soybean mixture",
          "The ground soybean mixture was subjected to subsequent processing to separate and obtain the solid portion used for beske production.",
          "Step 5: Pressing and portioning",
          "The solid product was pressed and divided into smaller portions in preparation for frying.",
          "Step 6: Frying",
          "The prepared portions were fried to produce the final beske product.",
          "Step 7: Final product",
          "The fried product was prepared for consumption or sale.",
          "The activity demonstrated the practical skills required to transform soybeans into a ready-to-eat product. It also provided insight into the role of beske production as a small-scale economic activity and the use of locally available agricultural products in food processing."
        ]
      },
      {
        "heading": "Lessons From The Skill Acquisition Activity",
        "paragraphs": [
          "The skill-acquisition activity provided firsthand exposure to three indigenous production activities practised in Shao Community: Garri, Orunla and Beske production. Rather than relying solely on theoretical descriptions, we visited the production sites, interacted with local producers, observed the various processes and participated in selected activities.",
          "One of the major lessons from the activity was the amount of labour, time and practical skill required to transform raw agricultural products into finished food products. The experience provided a greater appreciation of the effort involved in food production and the expertise developed by community members through repeated practice.",
          "The activity also demonstrated the relationship between livelihood and community health. Garri, Orunla and Beske production provide sources of income for individuals involved in these activities, while the products contribute to food availability within the community. Understanding these livelihood activities is therefore important when considering the health and well-being of the community.",
          "The importance of hygiene in food processing was also reinforced. The different stages of preparation, drying, grinding and processing require appropriate handling and cleanliness to reduce the risk of contamination. This provided an opportunity to relate community-based food-processing practices to principles of preventive health.",
          "An important occupational-health observation was made during the garri-processing activity. The grinding of cassava generated particles and dust, creating a potential risk of eye exposure for workers who are repeatedly involved in the process. Based on this observation, the provision of protective safety glasses was considered as a simple occupational-health intervention for the identified gari-processing sites.",
          "The activity also strengthened our communication and interpersonal skills. Interaction with the local producers required respectful engagement, active listening, observation and appropriate questioning. This helped us appreciate the value of indigenous knowledge and the importance of engaging community members when identifying health risks and developing practical interventions.",
          "The skill-acquisition activity therefore provided practical exposure to the livelihood activities of the people of Shao Community and demonstrated the relationship between occupation, food processing, economic activity and health.",
          "It also enabled us to identify an occupational-health concern and consider a practical intervention based on direct observation within the community."
        ]
      },
      {
        "heading": "Conclusion",
        "paragraphs": [
          "The skill-acquisition activity provided practical exposure to garri, orunla, and beske production and enhanced our understanding of indigenous food-processing methods and their role in community livelihoods. It also strengthened our appreciation of hygiene, occupational safety, community engagement, and the relationship between livelihood activities and health."
        ]
      }
    ],
    "blocks": [
      {
        "kind": "content",
        "heading": "Skill Acquisition During The Cobes Posting",
        "paragraphs": [
          "As part of the Optional Studies component of the COBES programme, the team participated in a practical skill-acquisition activity in Shao Community on Wednesday, 12th of August 2026. The activity was aimed at exposing students to selected indigenous occupations and food-processing practices carried out by members of the community.",
          "The team was divided into three groups, with each group assigned to a different production activity. One group participated in Garri production, another in Orunla production, while the third participated in Beske production. The groups visited the respective production sites, interacted directly with local producers, observed the various stages of production, and participated in selected aspects of the processes.",
          "The activity provided an opportunity to acquire firsthand knowledge of traditional production methods and to appreciate the labour, skills, resources and time involved in transforming locally available agricultural products into consumable products. It also provided insight into the role of these activities as sources of livelihood for members of the community."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Skill Acquisition — field overview",
        "src": "",
        "poster": "",
        "alt": "Skill Acquisition — field overview",
        "description": "Place a relevant field photograph here."
      },
      {
        "kind": "content",
        "heading": "Garri Production",
        "paragraphs": [
          "The group assigned to garri production visited a local garri-processing site, where we were introduced to the process of converting cassava into garri.",
          "The various stages observed and participated in are outlined below.",
          "Step 1: Selection and peeling of cassava",
          "The cassava tubers were selected and peeled to remove the outer covering. The peeled tubers were subsequently prepared for further processing.",
          "Step 2: Washing",
          "The peeled cassava tubers were thoroughly washed to remove dirt and other unwanted materials from their surfaces.",
          "Step 3: Grating or Grinding",
          "The washed cassava was grated to produce a wet cassava pulp. This stage reduces the cassava into a form suitable for subsequent processing.",
          "Step 4: Fermentation",
          "The grated cassava pulp was allowed to undergo fermentation. This stage forms part of the traditional processing method used in gari production.",
          "Step 5: Pressing",
          "Following fermentation, the cassava pulp was pressed to remove excess water. The pressing process reduces the moisture content of the pulp and prepares it for the next stage.",
          "Step 6: Sieving",
          "The pressed cassava was sieved to break up lumps and obtain a relatively uniform texture suitable for frying.",
          "Step 7: Frying",
          "The sieved cassava mash was placed in a large frying pan over a fire. It was continuously stirred during frying to ensure even heating and prevent the product from burning.",
          "Step 8: Final product",
          "After adequate frying, the processed cassava formed gari, which was then allowed to cool and was prepared for consumption or storage.",
          "Participation in the process provided an appreciation of the skill, time and physical effort required for garri production.",
          "We also observed occupational conditions at the processing site. In particular, cassava grinding generated particles and dust, which could come into contact with workers' eyes during repeated processing activities. This observation informed the consideration of protective safety glasses as a possible occupational-health intervention for the identified gari-processing sites."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Garri Production — process image",
        "src": "",
        "poster": "",
        "alt": "Garri Production — process image",
        "description": "Place a photograph showing this production stage or activity here."
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Garri Production — process video",
        "src": "",
        "poster": "",
        "alt": "Garri Production — process video",
        "description": "Place a short video showing the practical process here."
      },
      {
        "kind": "content",
        "heading": "Orunla Production",
        "paragraphs": [
          "The second group participated in the production of orunla, a traditional food product made from dried okra.",
          "The activity was carried out at a local production site, where we interacted with the women involved in the production and participated in the various stages.",
          "Step 1: Preparation of okra",
          "The okra was prepared for processing and sliced into smaller pieces.",
          "Step 2: Slicing",
          "The okra was cut into smaller pieces to facilitate effective drying.",
          "Step 3: Drying",
          "The sliced okra was spread out and exposed to sunlight. It was allowed to dry until sufficient moisture had been removed.",
          "Step 4: Grinding",
          "The dried okra was taken for grinding to produce the final orunla product.",
          "Step 5: Packaging and preservation",
          "The finished product was prepared for storage and subsequent use or sale.",
          "The activity provided practical knowledge of traditional food-processing methods and demonstrated how locally available food products can be preserved through drying and further processing.",
          "We also observed the importance of maintaining cleanliness during food preparation, drying and grinding to minimize contamination of the finished product. The interaction with the producers further demonstrated that orunla production serves as both a traditional food-processing practice and a source of livelihood for members of the community involved in its production and sale."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Orunla Production — process image",
        "src": "",
        "poster": "",
        "alt": "Orunla Production — process image",
        "description": "Place a photograph showing this production stage or activity here."
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Orunla Production — process video",
        "src": "",
        "poster": "",
        "alt": "Orunla Production — process video",
        "description": "Place a short video showing the practical process here."
      },
      {
        "kind": "content",
        "heading": "Beske Production",
        "paragraphs": [
          "The third group participated in beske production. The activity provided an opportunity to learn directly from local producers about the processing of soybeans into a ready-to-eat product.",
          "Step 1: Sorting and cleaning",
          "The soybeans were sorted to remove unwanted materials and cleaned in preparation for further processing.",
          "Step 2: Soaking",
          "The cleaned soybeans were soaked to soften them and make them suitable for subsequent processing.",
          "Step 3: Grinding",
          "The soaked soybeans were ground to produce a soybean mixture.",
          "Step 4: Processing of the soybean mixture",
          "The ground soybean mixture was subjected to subsequent processing to separate and obtain the solid portion used for beske production.",
          "Step 5: Pressing and portioning",
          "The solid product was pressed and divided into smaller portions in preparation for frying.",
          "Step 6: Frying",
          "The prepared portions were fried to produce the final beske product.",
          "Step 7: Final product",
          "The fried product was prepared for consumption or sale.",
          "The activity demonstrated the practical skills required to transform soybeans into a ready-to-eat product. It also provided insight into the role of beske production as a small-scale economic activity and the use of locally available agricultural products in food processing."
        ]
      },
      {
        "kind": "media",
        "type": "image",
        "label": "Beske Production — process image",
        "src": "",
        "poster": "",
        "alt": "Beske Production — process image",
        "description": "Place a photograph showing this production stage or activity here."
      },
      {
        "kind": "media",
        "type": "video",
        "label": "Beske Production — process video",
        "src": "",
        "poster": "",
        "alt": "Beske Production — process video",
        "description": "Place a short video showing the practical process here."
      },
      {
        "kind": "content",
        "heading": "Lessons From The Skill Acquisition Activity",
        "paragraphs": [
          "The skill-acquisition activity provided firsthand exposure to three indigenous production activities practised in Shao Community: Garri, Orunla and Beske production. Rather than relying solely on theoretical descriptions, we visited the production sites, interacted with local producers, observed the various processes and participated in selected activities.",
          "One of the major lessons from the activity was the amount of labour, time and practical skill required to transform raw agricultural products into finished food products. The experience provided a greater appreciation of the effort involved in food production and the expertise developed by community members through repeated practice.",
          "The activity also demonstrated the relationship between livelihood and community health. Garri, Orunla and Beske production provide sources of income for individuals involved in these activities, while the products contribute to food availability within the community. Understanding these livelihood activities is therefore important when considering the health and well-being of the community.",
          "The importance of hygiene in food processing was also reinforced. The different stages of preparation, drying, grinding and processing require appropriate handling and cleanliness to reduce the risk of contamination. This provided an opportunity to relate community-based food-processing practices to principles of preventive health.",
          "An important occupational-health observation was made during the garri-processing activity. The grinding of cassava generated particles and dust, creating a potential risk of eye exposure for workers who are repeatedly involved in the process. Based on this observation, the provision of protective safety glasses was considered as a simple occupational-health intervention for the identified gari-processing sites.",
          "The activity also strengthened our communication and interpersonal skills. Interaction with the local producers required respectful engagement, active listening, observation and appropriate questioning. This helped us appreciate the value of indigenous knowledge and the importance of engaging community members when identifying health risks and developing practical interventions.",
          "The skill-acquisition activity therefore provided practical exposure to the livelihood activities of the people of Shao Community and demonstrated the relationship between occupation, food processing, economic activity and health.",
          "It also enabled us to identify an occupational-health concern and consider a practical intervention based on direct observation within the community."
        ]
      },
      {
        "kind": "content",
        "heading": "Conclusion",
        "paragraphs": [
          "The skill-acquisition activity provided practical exposure to garri, orunla, and beske production and enhanced our understanding of indigenous food-processing methods and their role in community livelihoods. It also strengthened our appreciation of hygiene, occupational safety, community engagement, and the relationship between livelihood activities and health."
        ]
      }
    ]
  }
];
 
export const mloGroups = {
  general: mloItems.filter((item) => item.kind === 'general'),
  specific: mloItems.filter((item) => item.kind === 'specific'),
  optional: mloItems.filter((item) => item.kind === 'optional'),
} as const;


