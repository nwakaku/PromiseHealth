export async function AI(
  patientName: string,
  patientAge: string,
  medicalDetails: string,
  bloodType: string,
  bloodGroup: string
): Promise<string> {
  // Define use cases based on medicalDetails
  let selectedUseCase = "";

  if (medicalDetails.toLowerCase().includes("burn")) {
    selectedUseCase = `${patientName} accidentally burned their hand while cooking. Run cool (not cold) water over the burn for 10-20 minutes. Cover the burn with a clean, non-stick bandage and seek medical attention if it's severe.`;
  } else if (medicalDetails.toLowerCase().includes("choking")) {
    selectedUseCase = `${patientName} is choking on food. Encourage them to cough forcefully to dislodge the object. If they can't cough, perform abdominal thrusts (Heimlich maneuver) until the object is expelled or help arrives.`;
  } else if (medicalDetails.toLowerCase().includes("cuts")) {
    selectedUseCase = `${patientName} has a deep cut on their leg. Apply direct pressure with a clean cloth or bandage to stop the bleeding. Elevate the leg if possible. Call for medical help and sanitize the wound to prevent infection.`;
  } else if (medicalDetails.toLowerCase().includes("poisoning")) {
    selectedUseCase = `${patientName} may have ingested a toxic substance. Call the Poison Control Center at 1-800-XXX-XXXX immediately. Provide as much information as possible about what they ingested.`;
  } else if (medicalDetails.toLowerCase().includes("sprain")) {
    selectedUseCase = `${patientName} twisted their ankle while walking. Rest the injured area, apply ice, compress with a bandage, and elevate the foot. Avoid putting weight on it and consult a doctor if pain persists.`;
  } else if (medicalDetails.toLowerCase().includes("seizure")) {
    selectedUseCase = `${patientName} is having a seizure. Move nearby objects away to prevent injury. Gently guide them to the ground, cushion their head, and turn them on their side to aid breathing. Do not put anything in their mouth.`;
  } else if (medicalDetails.toLowerCase().includes("nosebleed")) {
    selectedUseCase = `${patientName} has a nosebleed. Have them sit upright, pinch the soft part of the nose, and lean forward slightly. Apply cold compress to the nose bridge. Avoid tilting the head backward.`;
  } else if (medicalDetails.toLowerCase().includes("snake bite")) {
    selectedUseCase = `${patientName} was bitten by a snake. Keep them as still as possible, and immobilize the bitten area at or just above heart level. Seek immediate medical assistance, and try to identify the snake if possible.`;
  } else if (medicalDetails.toLowerCase().includes("heatstroke")) {
    selectedUseCase = `${patientName} is showing signs of heatstroke, including confusion and high body temperature. Move them to a cooler place, remove excess clothing, and use cool water or ice packs to cool them down. Seek medical help.`;
  } else if (medicalDetails.toLowerCase().includes("ingestion of foreign object")) {
    selectedUseCase = `${patientName} may have swallowed a foreign object. Do not try to make them vomit. Encourage them to stay calm, drink fluids, and seek medical attention to determine if an X-ray is needed.`;
  } else if (medicalDetails.toLowerCase().includes("bee sting")) {
    selectedUseCase = `${patientName} has been stung by a bee. Remove the stinger using a credit card or your fingernail, wash the area, and apply a cold compress to reduce swelling and itching.`;
  } else if (medicalDetails.toLowerCase().includes("eye injury")) {
    selectedUseCase = `An object has entered ${patientName}'s eye. Do not rub the eye. Gently flush with clean water for 15 minutes and seek immediate medical attention.`;
  } else if (medicalDetails.toLowerCase().includes("dog bite")) {
    selectedUseCase = `A dog has bitten ${patientName}. Wash the wound with soap and water, apply an antiseptic, and cover it with a clean cloth. Seek medical attention to evaluate the risk of infection.`;
  } else if (medicalDetails.toLowerCase().includes("electrical shock")) {
    selectedUseCase = `${patientName} received an electrical shock. Ensure the area is safe from electrical hazards. Do not touch the person until power is off. Call 911 and perform CPR if necessary.`;
  } else if (medicalDetails.toLowerCase().includes("heat exhaustion")) {
    selectedUseCase = `${patientName} is showing signs of heat exhaustion, such as heavy sweating and weakness. Move them to a cooler place, provide water, and use fans or cool cloths. If symptoms worsen, seek medical help.`;
  } else if (medicalDetails.toLowerCase().includes("fainting")) {
    selectedUseCase = `${patientName} has fainted. Lay them flat on their back, elevate their legs, and loosen tight clothing. Ensure their airway is clear, and monitor their breathing.`;
  } else if (medicalDetails.toLowerCase().includes("ingestion of chemicals")) {
    selectedUseCase = `${patientName} may have ingested harmful chemicals. Rinse their mouth with water and call Poison Control at 1-800-XXX-XXXX for guidance. Do not induce vomiting.`;
  } else if (medicalDetails.toLowerCase().includes("head injury")) {
    selectedUseCase = `A head injury has occurred to ${patientName}. Keep them still, apply a clean cloth to any bleeding, and call 911. Do not move them unless necessary.`;
  } else if (medicalDetails.toLowerCase().includes("diabetic emergency")) {
    selectedUseCase = `${patientName} has diabetes and is experiencing low blood sugar (hypoglycemia). Offer them a sugary drink or snack and monitor their condition. If they do not improve, seek medical help.`;
  } else if (medicalDetails.toLowerCase().includes("severe bleeding")) {
    selectedUseCase = `${patientName} is bleeding severely. Apply direct pressure with a clean cloth or bandage to control bleeding, and call 911 immediately.`;
  } else if (medicalDetails.toLowerCase().includes("heat rash")) {
    selectedUseCase = `${patientName} has developed a heat rash. Keep the affected area dry, avoid tight clothing, and use a mild lotion or powder to soothe the skin.`;
  } else if (medicalDetails.toLowerCase().includes("ingestion of batteries")) {
    selectedUseCase = `${patientName} may have swallowed a battery. Do not delay; seek immediate medical attention. Batteries can be dangerous if ingested.`;
  } else if (medicalDetails.toLowerCase().includes("asthma attack")) {
    selectedUseCase = `${patientName} is having an asthma attack. Help them sit upright, use their inhaler if available, and assist with slow, deep breaths. If symptoms persist, call 911.`;
  } else if (medicalDetails.toLowerCase().includes("broken bone")) {
    selectedUseCase = `${patientName} has a suspected broken bone. Immobilize the injured area, apply a cold compress, and seek medical help. Do not attempt to set the bone.`;
  } else if (
    medicalDetails.toLowerCase().includes("ingestion of spoiled food")
  ) {
    selectedUseCase = `${patientName} has consumed spoiled food and feels nauseous. Keep them hydrated with clear fluids, and monitor for severe symptoms. If symptoms worsen, seek medical attention.`;
  } else if (medicalDetails.toLowerCase().includes("chemical burn")) {
    selectedUseCase = `${patientName} has a chemical burn on their skin. Rinse the affected area with cool, running water for at least 20 minutes and remove contaminated clothing. Seek medical attention.`;
  } else if (medicalDetails.toLowerCase().includes("seizure")) {
    selectedUseCase = `${patientName} is having a seizure. Move nearby objects away to prevent injury. Gently guide them to the ground, cushion their head, and turn them on their side to aid breathing. Do not put anything in their mouth.`;
  } else if (medicalDetails.toLowerCase().includes("snake bite")) {
    selectedUseCase = `${patientName} was bitten by a snake. Keep them as still as possible, immobilize the bitten area at or just above heart level. Seek immediate medical assistance, and try to identify the snake if possible.`;
  } else if (medicalDetails.toLowerCase().includes("heart attack")) {
    selectedUseCase = `${patientName} is experiencing symptoms of a heart attack, including chest pain, shortness of breath, and nausea. Call 911 immediately, keep them calm, and offer aspirin if available.`;
  } else if (medicalDetails.toLowerCase().includes("cpr")) {
    selectedUseCase = `Performing CPR on an unresponsive patient. Start chest compressions at a rate of 100-120 per minute and give rescue breaths as needed. Continue until professional help arrives.`;
  } else {
    selectedUseCase = `A medical emergency has occurred with ${patientName}. Please provide more specific information to receive appropriate first aid guidance.`;
  }

  return selectedUseCase;
}

// export async function AI(patientName:string, patientAge:string, medicalDetails:string, bloodType:string, bloodGroup:string): Promise<string> {
//     const apiKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY;
//     if (!apiKey) {
//         throw new Error('API key not found in environment variables.');
//     }

//     const endpoint: string = 'https://api.openai.com/v1/chat/completions';

//     // Prepare the request payload
//     const payload = {
//         model: 'gpt-3.5-turbo',
//         messages: [
//             {
//                 role: 'system',
//                 content: `You are a first aid agent providing assistance to someone in need.${medicalDetails}.write in a paragraph`,
//             },
//             // { role: 'user', content: `${medicalDetails}, write a paragraph giving a first aid recommendation in full details, don't let the user know you are an AI.` },
//         ],
//         max_tokens: 200,
//         temperature: 0.7,
//         n: 1,
//         stop: '\n',
//     };

//     // Make the API request to ChatGPT API
//     try {
//         const response = await fetch(endpoint, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${apiKey}`,
//             },
//             body: JSON.stringify(payload),
//         });

//         // Parse the response
//         const data = await response.json();
//         console.log(data);
//         const generatedSentence = data.choices[0].message.content;
//         return generatedSentence;
//     } catch (error) {
//         console.error('Error:', error);
//         throw error;
//     }
// }
