import React from 'react';
import {InlineShareButtons} from 'sharethis-reactjs';
import Grid from '@material-ui/core/Grid';

export default function SocialSharing(props){

let targeturl = props.url;
  return (

      <div> 
            <InlineShareButtons
              config={{
                alignment: 'center',  // alignment of buttons (left, center, right)
                color: 'social',      // set the color of buttons (social, white)
                enabled: true,        // show/hide buttons (true, false)
                font_size: 16,        // font size for the buttons
                labels: 'cta',        // button labels (cta, counts, null)
                language: 'de',       // which language to use (see LANGUAGES)
                networks: [           // which networks to include (see SHARING NETWORKS)
                  'whatsapp',
                  'linkedin',
                  'facebook',
                  'twitter',
                  'email'
                ],
                padding: 14,          // padding within buttons (INTEGER)
                radius: 5,            // the corner radius on each button (INTEGER)
                size: 35,             // the size of each button (INTEGER)

                // OPTIONAL PARAMETERS
                url: props.url, // (defaults to current url)
                // image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
                description: 'Das Portal KmuVsCorona.de ist im Rahmen des Hackathons der Bundesregierung entstanden und vermittelt Hilfsvorschläge, Nützliche Seiten und finanzielle Unterstützungsmöglichkeiten für KMUs und Selbständige. Schau vorbei - vielleicht ist etwas interessantes dabei!',       // (defaults to og:description or twitter:description)
                title: 'KMU versus Corona: Hilfsvorschläge und Lösungsansätze in der Coronakrise | Zielgruppe: '+props.zielgruppe,            // (defaults to og:title or twitter:title)
                message: 'Das Portal KmuVsCorona.de ist im Rahmen des Hackathons der Bundesregierung entstanden und vermittelt Hilfsvorschläge, Nützliche Seiten und finanzielle Unterstützungsmöglichkeiten für KMUs und Selbständige. Schau vorbei - vielleicht ist etwas interessantes dabei! '+props.url,    // (only for email sharing)
                subject: 'KMU versus Corona: Lösungsvorschläge für '+props.zielgruppe,  // (only for email sharing)
                // username: 'custom twitter handle' // (only for twitter sharing)
              }}
            />
          </div>
    )
  
}
