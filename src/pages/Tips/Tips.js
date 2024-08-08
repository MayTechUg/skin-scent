import React from 'react'
import '../style/tips.css'
import Slideshow from '../../components/slideShow'

import sunscreen from '../../assets/tipsImages/happy-woman-using-natural-face-mask_23-2148883864.jpg'
import selfCheck from '../../assets/tipsImages/person-doing-selfcare-beauty-treatments_23-2149224020.jpg'
import simplify from '../../assets/tipsImages/woman-is-holding-jar-cream-her-hand-she-is-smiling-looking-camera_137441-9749.jpg'
import skinType from '../../assets/tipsImages/ethnic-woman-applying-cream-face_128034-1393.jpg'
import lips from '../../assets/tipsImages/smile-red-lipstick_23-2147655345.jpg'
import handsOff from '../../assets/tipsImages/doctor-crossed-hands-chest-white-wall-he-is-wearing-medical-mask-no-stop-gesture_230311-13711.jpg'

const Tips = () => {

  const slides = [
    <div className='tips'>
      <div className='tipContainer'>
        <div className='tipText'>Wear Sunscreen daily</div>
        <div className='tipHeader'>
          <img src={sunscreen} alt='woman using sunscreen'/>
        </div>
      </div>
      <div className='tip'>Sunscreen is one of the single most important things you can do for your skin. When applied correctly, sunscreen protects your skin against the suns harmful ultraviolet (UV) rays, which cause sunburn, skin cancer, and premature skin aging, like wrinkles and age spots. For the best protection, apply a broad-spectrum, water-resistant sunscreen with an SPF of 30 or higher to all skin not covered by clothing, and reapply every two hours or after swimming or sweating. To save time in your skin care routine, you can consider using a moisturizer that also contains sunscreen. However, while cosmetics that contain sunscreen are convenient, remember to reapply them in order to achieve the best sun protection.</div>
    </div>,
    <div className='tips'>
    <div className='tipContainer'>
      <div className='tipText'>Check your skin regularly</div>
      <div className='tipHeader'>
        <img src={selfCheck} alt='woman checking skin'/>
      </div>
    </div>
    <div className='tip'>Skin cancer is the most common cancer in the world., affecting one in five personels in their lifetime. Further, nearly 20 personels die from melanoma, the deadliest form of skin cancer, every day. However, when detected early, skin cancer—including melanoma—is highly treatable. In fact, the five-year survival rate for people whose melanoma is detected and treated before it spreads to the lymph nodes is 98%. It is important to check your skin regularly for new spots, spots that are different from other spots on your body, or moles that itch, bleed or change color, as these are often early warning signs of skin cancer. If you notice any suspicious spots, make an appointment to see a board-certified dermatologist.</div>
  </div>,
  <div className='tips'>
  <div className='tipContainer'>
    <div className='tipText'>Use products of your skin type</div>
    <div className='tipHeader'>
      <img src={skinType} alt='woman using skincare'/>
    </div>
  </div>
  <div className='tip'>Understanding your skin type will help you learn how to take care of your skin and select skin care products that are right for you. As mentioned above, here's how to identify and understand your skin type:<br/>
  Sensitive skin: May sting or burn after product use
  Normal skin: Clear and not sensitive
  Dry skin: Flaky, itchy or rough
  Combination skin: Dry in some areas and oily in others
  Oily: Shiny and greasy</div>
</div>,
    <div className='tips'>
      <div className='tipContainer'>
        <div className='tipText'>Simplify your skin care routine</div>
        <div className='tipHeader'>
          <img src={simplify} alt='woman self checking her skin'/>
        </div>
      </div>
      <div className='tip'>Less is more when it comes to skin care. Using too many products, especially multiple anti-aging products, can irritate your skin. Instead, focus on the basics, such as a gentle cleanser, sunscreen, and moisturizer. Establish morning and nighttime skin care routines that work well for your skin, and stick with them.</div>
    </div>,
    <div className='tips'>
      <div className='tipContainer'>
        <div className='tipText'>Treat your lips</div>
        <div className='tipHeader'>
          <img src={lips} alt='woman applying lipstick'/>
        </div>
      </div>
      <div className='tip'> Since skin cancer can form on the lips, apply a lip balm or lipstick that contains sunscreen with an SPF of 30 or higher before going outdoors. If your lips feel chapped or dry, apply petroleum jelly for added moisture.</div>
    </div>,
    <div className='tips'>
      <div className='tipContainer'>
        <div className='tipText'>Keep your hands off your face</div>
        <div className='tipHeader'>
          <img src={handsOff} alt='doctor warning'/>
        </div>
      </div>
      <div className='tip'>Whenever you touch your face, you transfer dirt, germs, and oil from your hands to your face. Do your best to leave your skin alone throughout the day. Avoid picking, popping or squeezing pimples, as this can cause scarring.</div>
    </div>
  ]

  return (
   <>
    <Slideshow slides={slides}/>
   </>
  )
}

export default Tips