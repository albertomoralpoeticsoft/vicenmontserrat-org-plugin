export default $ => {

  /* mision-landing-newsletter-y-masterclass */

  const $sintoniza_pensamiento_emocion_accion_action_subscribe = $('.page-id-1757 #wpforms-submit-1297')
  $sintoniza_pensamiento_emocion_accion_action_subscribe
  .on(
    'click',
    function() { 

      gtag(
        'event', 
        'form_subscription', 
        {
          'form': 'SINTONIZA PENSAMIENTO, EMOCIÓN Y ACCIÓN',
          'debug_mode': true 
        }
      )
    }
  )

  /* newsletter-alta */
  
  const $inscribete_nuestra_newsletter_action_subscribe = $('.page-id-1785 #wpforms-submit-1297')
  $inscribete_nuestra_newsletter_action_subscribe
  .on(
    'click',
    function() { 

      gtag(
        'event', 
        'form_subscription', 
        {
          'form': 'INSCRÍBETE A NUESTRA NEWSLETTER',
          'debug_mode': true 
        }
      )
    }
  )
  
  /*
  let $iframe = $('.page-id-1757 iframe.ipz-iframe')
  if($iframe.length) {

    $iframe = $iframe.eq(0)
    $iframe
    .on(
      'click',
      function() {

        console.log('click')
      }
    )
  }
  const $button = $iframe.contents().find('#subscribe-form .submit-wrapper input');

  console.log($iframe.contents().find('#subscribe-form'))

  $button
  .on(
    'click',
    function() { 

      console.log('mail_relay')

      gtag(
        'event', 
        'form_subscription', 
        {
          'form': 'INSCRÍBETE A NUESTRA NEWSLETTER',
          'debug_mode': true 
        }
      )
    }
  )
  */
}