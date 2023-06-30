import Link from "next/link";
import Image from "next/image";
import leftarrow from "../../../public/assets/icons/arrow-left.png";
import rightarrow from "../../../public/assets/icons/arrow-right.png";

export default function SLAM() {
    return (
      <div className="bg-sidebar p-5 ">
          <div className="border rounded-md border-heading-text p-5">
          <div className="py-2 border rounded-3xl bg-white flex justify-between items-center">
            <Link href="/trackinginVR">
            <Image src={leftarrow} alt="leftarrow" className="w-3 sm:w-3 ml-4"/>
              </Link>
              <div className="text-sidebar text-center text-lg font-bold  ">
              Simultaneous Localization and Mapping
              </div>
              <Link href="/VonlySLAM">
              <Image src={rightarrow} alt="rightarrow" className="w-3 sm:w-3 mr-4"/>
              </Link>
            </div>
            <div>
              <div className="text-heading-text text-3xl font-bold pb-2 pt-4" id="section0">Basics 0</div>
              <div className=" text-white text-md font-normal pb-8">ISSuper Imposing digital elements onto real world (blending of the 2 worlds).
Ex: Pokemon go, Snapchat filters, room decor etc
The content can span multiple sensory modalities, including visual, auditory, haptic, somatosensory and olfactory
3D registration (i.e., accurate pose registration/localization) is the key fundamental technique for achieving immersive AR effects.
Some 3D registration (basically tracking) techniques - ARToolkit (uses markers which limits its ability) and SLAM
uper Imposing digital elements onto real world (blending of the 2 worlds).
Ex: Pokemon go, Snapchat filters, room decor etc
The content can span multiple sensory modalities, including visual, auditory, haptic, somatosensory and olfactory
3D registration (i.e., accurate pose registration/localization) is the key fundamental technique for achieving immersive AR effects.
Some 3D registration (basically tracking) techniques - ARToolkit (uses markers which limits its ability) and SLAM
n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </div>
            </div>
            <div>
              <div className="text-heading-text text-3xl font-bold pb-2 pt-4" id="section1">Basics 1</div>
              <p className="text-white text-md font-normal pb-8">There are manSuper Imposing digital elements onto real world (blending of the 2 worlds).
Ex: Pokemon go, Snapchat filters, room decor etc
The content can span multiple sensory modalities, including visual, auditory, haptic, somatosensory and olfactory
3D registration (i.e., accurate pose registration/localization) is the key fundamental technique for achieving immersive AR effects.
Some 3D registration (basically tracking) techniques - ARToolkit (uses markers which limits its ability) and SLAM
y variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
            </div>
            <div>
              <div className="text-heading-text text-3xl font-bold pb-2 pt-4" id="section2">Basics 2</div>
              <p className="text-white text-md font-normal pb-8">Super Imposing digital elements onto real world (blending of the 2 worlds).
Ex: Pokemon go, Snapchat filters, room decor etc
The content can span multiple sensory modalities, including visual, auditory, haptic, somatosensory and olfactory
3D registration (i.e., accurate pose registration/localization) is the key fundamental technique for achieving immersive AR effects.
Some 3D registration (basically tracking) techniques - ARToolkit (uses markers which limits its ability) and SLAM
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
            </div>
          </div>
      </div>
     
    )
  }
  