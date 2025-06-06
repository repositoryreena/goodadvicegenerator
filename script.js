const advice = {
    grandparents: [
        "Progress may be slow, but consistency leads to lasting success.",
        "Pursue what you were meant for—your purpose is your greatest power."
    ],
    mother: [
      "Everything in moderation, including moderation itself.",
      "Dress modestly; let your character shine louder than your clothes.",
      "Be proud of being a woman—it’s a strength, not a limitation.",
      "Learn to stand on your own two feet; independence is freedom.",
      "Face life fearlessly—you're stronger than you think."
    ],
    dad: [
      "Learn to code—it’s a modern superpower.",
      "Be rich—don’t settle for just getting by.",
      "Keep your eyes on your goal and don’t get distracted.",
      "Put in the work—hard work compounds.",
      "Whatever you do, do it with excellence.",
      "Dream big—bigger than what's comfortable.",
      "Put effort into your appearance—it reflects your mindset.",
      "Keep a positive mindset; it’s half the battle.",
      "Kindness is strength, not weakness.",
      "Ignore the noise—trust your path.",
      "Pain and struggle are part of greatness. Tolerate both.",
      "Persistence beats talent. Never give up.",
      "Don’t wait for a teacher. Be self-taught.",
      "Let success be your response—prove them wrong.",
      "When you find yourself in a hole, the first thing to do is stop digging.",
      "With determination and effort, anyone has the potential to achieve anything they set their mind to.",
      "Surround yourself with people who uplift and inspire you—your environment shapes your mindset.",
"A change of scenery, like moving to a new apartment, can be a powerful way to break old habits and start fresh.",
"The harder I work, the luckier I get.",
"Better to ask for forgiveness than permission.",
"Doing nothing is the worst thing you can do."
    ],
    auntUncles: [
      "Make your own decisions—don’t let others write your story.",
      "Sometimes you have to pretend to care, just to keep peace.",
      "Engage in conversations—listening is power.",
      "Small daily habits shape big futures.",
      "Value yourself. High self-esteem changes everything.",
      "Just showing up can be the hardest, most important part.",
      "Stay in school—it gives you options, even if it's not perfect.",
      "Respect isn’t requested—it’s earned.",
      "Put yourself first—you can’t pour from an empty cup.",
      "Honor your purpose and let it guide your journey.",
      "It might be time to look for a job.",
      "Family is one of life’s most valuable foundations—nurturing those relationships can bring lasting support, love, and a sense of belonging."
    ],
    friends: [
      "Be realistic—dreaming is fine, but acting is better.",
      "Don’t make life harder than it has to be—choose ease when you can.",
      "Practice. No one gets it right the first time.",
      "Don't overthink—sometimes the simplest path forward is the best.",
      "Take life lightly—learn to laugh, let go, and enjoy the moment.",
      "Appreciate what you have—there are many who have far less, or nothing at all.",
      "Respect yourself",
      "A meaningful life is found in balance.",
      "Choose what brings you joy."
    ]
  };
  
  function generateAdvice(category) {
    const messages = advice[category];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("adviceBox").innerText = messages[randomIndex];
  }
              