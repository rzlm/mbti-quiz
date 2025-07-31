type MBTIPersonality = {
  code: string;
  name: string;
  description: string;
};

const mbtiPersonalities: MBTIPersonality[] = [
  {
    code: "INTJ",
    name: "The Architect",
    description: "INTJs are strategic, independent thinkers who enjoy mastering complex systems. They are natural planners who often see the big picture and aim to turn ideas into long-term plans. Logical and insightful, they prefer structure and often work best alone. Although not overly emotional, they are deeply committed to their goals. INTJs can be perfectionistic and have high standards for themselves and others. Their confidence and innovative thinking often place them in leadership roles where they can develop visionary strategies and efficient systems."
  },
  {
    code: "INTP",
    name: "The Logician",
    description: "INTPs are curious, analytical, and deeply thoughtful individuals who are always searching for understanding. They are known for their love of abstract theories, logic, and solving intellectual puzzles. Often quiet and reserved, they enjoy working independently and need time alone to recharge. INTPs thrive on innovation and original thinking, constantly generating new ideas and possibilities. While they may struggle with structure and routine, they bring creative solutions to complex problems. Their independence and intellectual depth make them natural researchers, thinkers, and inventors."
  },
  {
    code: "ENTJ",
    name: "The Commander",
    description: "ENTJs are bold, determined, and decisive leaders who naturally take charge. They excel at organizing people and systems to achieve their goals efficiently. Strategic thinkers with strong analytical skills, ENTJs are motivated by challenges and long-term success. They can be assertive and outspoken, often unafraid to confront inefficiency or poor leadership. While they value logic over emotion, they are often respected for their vision and drive. ENTJs are results-oriented and thrive in competitive environments where their ambition and ability to lead are recognized and utilized."
  },
  {
    code: "ENTP",
    name: "The Debater",
    description: "ENTPs are energetic, curious, and intellectually adventurous. They love engaging in debates, exploring new ideas, and challenging assumptions—often playing devil’s advocate just for fun. ENTPs are quick-witted and adaptable, thriving in dynamic environments where innovation and improvisation are valued. They dislike routine and are often juggling multiple interests or projects at once. While they may lack follow-through, they excel at brainstorming and pushing boundaries. Their charm, creativity, and love for intellectual engagement make them inspiring collaborators and exciting conversationalists in both work and social settings."
  },
  {
    code: "INFJ",
    name: "The Advocate",
    description: "INFJs are idealistic, insightful, and deeply principled individuals who seek meaning in all areas of life. Guided by a strong internal moral compass, they care about others and are often drawn to helping causes or people. Though introverted, they connect well with others due to their empathy and intuition. INFJs enjoy deep conversations and dislike superficiality. They are also strategic and organized, combining idealism with structure to pursue their visions. Often seen as quiet visionaries, INFJs strive to make a meaningful difference in the world."
  },
  {
    code: "INFP",
    name: "The Mediator",
    description: "INFPs are gentle, introspective, and imaginative individuals who care deeply about authenticity and staying true to their values. They often feel emotions deeply and are driven by a strong sense of purpose. INFPs seek beauty, meaning, and personal growth in everything they do. While they may appear quiet, they possess a rich inner world and often express themselves through writing, art, or music. They are compassionate and idealistic, seeking harmony in relationships and the world. INFPs thrive in environments that allow creativity, reflection, and emotional expression."
  },
  {
    code: "ENFJ",
    name: "The Protagonist",
    description: "ENFJs are warm, outgoing, and inspiring individuals who naturally lead and uplift others. They are highly empathetic and have a strong sense of responsibility for their communities and relationships. Motivated by values and driven to make a positive impact, ENFJs often take on mentorship or leadership roles. They are charismatic communicators who excel at bringing people together and motivating teams toward shared goals. Although they sometimes overextend themselves, their dedication, emotional intelligence, and vision make them effective, compassionate leaders in both personal and professional spaces."
  },
  {
    code: "ENFP",
    name: "The Campaigner",
    description: "ENFPs are enthusiastic, creative, and highly expressive individuals who thrive on connection and exploration. They are driven by passion and curiosity, often jumping between interests as new ideas excite them. ENFPs are natural communicators who bring warmth and energy to social interactions. They value authenticity and personal growth, both in themselves and others. While they may struggle with routine or long-term focus, they excel in brainstorming and generating original ideas. Their emotional depth and optimistic spirit make them engaging friends, inspiring teammates, and passionate advocates."
  },
  {
    code: "ISTJ",
    name: "The Logistician",
    description: "ISTJs are dependable, methodical, and principled individuals who value tradition, duty, and hard work. They believe in structure, facts, and following through on commitments. ISTJs excel at managing logistics and maintaining systems with precision and care. They may appear reserved or serious, but they are deeply loyal and responsible. Preferring clear expectations and tangible results, they are reliable in both personal and professional spheres. Their attention to detail and sense of order often make them the backbone of any organization or group they belong to."
  },
  {
    code: "ISFJ",
    name: "The Defender",
    description: "ISFJs are nurturing, reliable, and loyal individuals who find joy in helping others. They are often quiet but observant, noticing the small details that make people feel cared for. ISFJs value tradition and stability, and they work hard behind the scenes to support loved ones and maintain harmony. Though they rarely seek recognition, their contributions are meaningful and lasting. They are grounded in practicality and driven by empathy, making them dependable friends, coworkers, and caregivers who lead with humility, kindness, and quiet strength."
  },
  {
    code: "ESTJ",
    name: "The Executive",
    description: "ESTJs are practical, organized, and results-driven individuals who excel at creating order and enforcing rules. They are natural leaders who take charge of situations and ensure that things are done efficiently and correctly. ESTJs value tradition, responsibility, and discipline, often thriving in structured environments. They can be blunt but are usually respected for their clarity and dependability. They prefer logic over emotion in decision-making and are often the ones who step up when a strong, decisive presence is needed to keep systems running smoothly."
  },
  {
    code: "ESFJ",
    name: "The Consul",
    description: "ESFJs are sociable, compassionate, and deeply attuned to the needs of others. They take pride in creating welcoming environments and ensuring everyone feels included. Often seen as caretakers, they are loyal and thrive when supporting family, friends, or communities. ESFJs value harmony and tradition and are sensitive to how their actions affect others. They are organized, dependable, and enjoy planning gatherings or events. Though they seek approval and may struggle with criticism, their warmth and generosity often make them beloved pillars of their social circles."
  },
  {
    code: "ISTP",
    name: "The Virtuoso",
    description: "ISTPs are logical, hands-on problem solvers who love to explore how things work. They are independent and adaptable, preferring action and experimentation over theory. Often calm and reserved, ISTPs are great in crisis situations and can think clearly under pressure. They value freedom and resist being boxed into routines. With a strong mechanical or technical mind, they enjoy taking things apart and finding innovative solutions. While they may appear detached, they are deeply observant and often reveal a clever sense of humor once comfortable."
  },
  {
    code: "ISFP",
    name: "The Adventurer",
    description: "ISFPs are quiet, free-spirited individuals who experience the world through vivid sensory perception. They are often artistic and value beauty, self-expression, and emotional authenticity. Though introverted, they are warm and spontaneous with those they trust. ISFPs dislike confrontation and prefer to go with the flow, adapting easily to change. They prioritize personal freedom and resist expectations that feel limiting. With a compassionate heart and a live-in-the-moment attitude, ISFPs often surprise others with their depth, creativity, and quiet but adventurous nature."
  },
  {
    code: "ESTP",
    name: "The Entrepreneur",
    description: "ESTPs are bold, energetic, and action-oriented individuals who thrive in fast-paced environments. They are natural risk-takers who love excitement and tend to act first and analyze later. Observant and pragmatic, they respond quickly to problems and enjoy being the center of attention. ESTPs value efficiency and dislike being bogged down by rules or routine. With their charm and confidence, they often influence others effortlessly. Though they may overlook long-term consequences, their courage and adaptability make them dynamic problem-solvers and engaging team players."
  },
  {
    code: "ESFP",
    name: "The Entertainer",
    description: "ESFPs are lively, outgoing individuals who love to entertain and make others smile. They live in the present and find joy in life's everyday pleasures. Enthusiastic and warm, ESFPs excel in social settings and are often drawn to performance or creative expression. They are emotionally attuned and value connection, making them empathetic and engaging friends. While they may avoid serious or structured tasks, they bring energy and spontaneity wherever they go. Their optimism and charm make them beloved companions and natural mood-lifters."
  }
];

export default mbtiPersonalities;
