import { Component, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-images-list',
  imports: [FormsModule, RouterModule],
  templateUrl: './images-list.html',
  styleUrl: './images-list.css'
})
export class ImagesList {
  public images: WritableSignal<any[]>;

  public randomImage: OutputEmitterRef<string> = output<string>();
  public selectedImage: OutputEmitterRef<string> = output<string>();


  constructor() {
    let imgs = localStorage.getItem("IMAGES");
    if(imgs != null) {
      this.images = signal(JSON.parse(imgs));
    } else {
      this.images = signal([
        {
          'authors': "Robert Gendler & Martin Pugh",
          'date': "2006-06-28",
          'explanation': "Nebulae are perhaps as famous for being identified with familiar shapes as cats are for getting into trouble.  Still, no known cat could have created the vast Cat's Paw Nebula visible in Scorpius. At 5,500 light years distant, Cat's Paw is an emission nebula with a red color that originates from an abundance of ionized hydrogen atoms.  Alternatively known as the Bear Claw Nebula or NGC 6334, stars nearly ten times the mass of our Sun have been born there in only the past few million years. This deep wide-field image of the Cat's Paw nebula was photographed from New South Wales, Australia.",
          'url': "https://apod.nasa.gov/apod/image/0606/catspaw_gendler_big.jpg",
          'title': "The Cat's Paw Nebula"
        },
        {
          'authors': "", 
          'date': "2002-05-07",
          "explanation": 'What is not pretty about the above picture?  In a word: smog.  In 2000 October the orbiting Space Shuttle Discovery photographed upstate New York just at sunset.  Visible is golden sunlight reflecting from two of the Great Lakes (Erie and Ontario), and several of the Finger Lakes.  Between the clouds at the top and ground at the bottom, however, is a trapped layer of smog.  Smog is mostly ozone but may contain small amounts of volatile organic compounds.  As opposed to "good smog" in the upper atmosphere, "bad smog" near the ground is created mostly by humans.  In the upper atmosphere, ozone reflects back harmful ultraviolet radiation, but when it occurs near the ground, it can be inhaled.  Smog continues to be studied with an eye for how it develops and how it affects human health.',
          'url':	"https://apod.nasa.gov/apod/image/0205/earthsmog_sts092_big.jpg",
          'title': "Smog Over New York"
        },
        {
          'authors':	"Stéphane Guisard",
          'date':	"2018-03-02",
          'explanation':	"Colourful star trails arc through the night in this wide-angle mountain and skyscape. From a rotating planet, the digitally added consecutive exposures were made with a camera fixed to a tripod and looking south, over northern Iran's Alborz Mountain range. The stars trace concentric arcs around the planet's south celestial pole, below the scene's rugged horizon. Combined, the many short exposures also bring out the pretty star colours. Bluish trails are from stars hotter than our Sun, while yellowish trails are from cooler stars. Near the center, the remarkably pinkish trail was traced by the star-forming Orion Nebula.",
          'url':	"https://apod.nasa.gov/apod/image/1803/SGU-Colourful_Alboraz_Startrails-1600-cp70.jpg",
          'title'	:"Alborz Mountain Star Trails"
        },
        {
          'authors':	"Alex Woronow",
          'date':	"2022-11-09",
          'explanation':	"Why does the nebula around the star WR-18 shine brighter on one side? Also known as NGC 3199, this active star and its surrounding nebula lie about 12,000 light-years away toward the nautical southern constellation of Carina. The featured deep image has been highly processed to bring out filamentary details of the glowing gas in the bubble-shaped nebula.  The nebula is about 75 light-years across. Near the nebula's center is a Wolf-Rayet star, WR-18, which is a massive, hot, short-lived star that generates an intense and complex stellar wind. In fact, Wolf-Rayet stars are known to create nebulas with interesting shapes as their powerful winds sweep up surrounding interstellar material. In this case, the bright right edge was initially thought to indicate that a bow shock was being produced as the star plowed through a uniform medium, like a boat through water. Recent measurements and analyses, however, have shown the star is not moving quickly toward the bright edge. A more likely explanation has emerged that the material surrounding the star is not uniform, but clumped and denser near the bright edge.",
          'url':	"https://apod.nasa.gov/apod/image/2211/wr18_woronow_2048.jpg",
          'title':	"The Asymmetric Nebula Surrounding Wolf-Rayet Star 18"
        },
        {
          'authors':	"Laurent Laveder (PhotoAstronomique.net)",
          'date':	"2005-08-26",
          'explanation':	`July's Full Moon looks strangely darkened and distorted in this remarkable telescopic view. The image is one of a series recorded when the Moon was very near the horizon. The long sight-line through a turbulent atmosphere gives rise to the tantalizing optical effects, including the thin "mirage" shape that seems to float just above the Moon's upper edge. Also seen (more easily in the inset), along the Moon's upper edge is a noticeable green rim. Substantial atmospheric refraction produces this prism-like effect -- related to the more commonly witnessed green flash of the setting Sun. Careful inspection of the full image reveals a corresponding red rim along the lower edge, another intriguing signature of atmospheric refraction.  News: Beware the Mars Hoax`,
          'url':	"https://apod.nasa.gov/apod/image/0508/LunarGreenFlash_laveder_f.jpg",
          'title':	"Full Moon, Green Rim"
        }
      ]);
      localStorage.setItem("IMAGES", JSON.stringify(this.images()));
    }
  }

  public onRandomImage(): void {
    let idx = Math.floor(Math.random() * this.images().length)
    this.randomImage.emit(this.images()[idx].url);
  }

  public onSelectedImage(idx: number): void {
    this.selectedImage.emit(this.images()[idx].url);
  }
}
