import logo from './logo.png'
import logo_icon from './logo_icon.svg'
import gmail_icon from './gmail_icon.png'
import instagram_icon from './instagram_icon.png'
import linkedIn_icon from './linkedin_icon.png'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.png'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import sample_img_3 from './sample_img_3.png'
import sample_img_4 from './sample_img_4.png'

export const assets = {
    logo,
    logo_icon,
    gmail_icon,
    instagram_icon,
    linkedIn_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    email_icon,
    sample_img_3,
    sample_img_4
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Diksha Yadav',
        role:'MS PowerPoint Expert',
        stars:5,
        text:`Visionary AI has been my go-to tool, streamlining my workflow with its ease of use and incredible functionality.`
    },
    {
        image:profile_img_2,
        name:'Saurav Singhal',
        role:'Content Creator',
        stars:5,
        text:`I've relied on Visionary AI for my Instagram content, and it has truly transformed my workflow—it's incredibly easy to use and has streamlined my creative process.`
    },
    {
        image:profile_img_3,
        name:'Pragun Sharma',
        role:' Graphic Designer',
        stars:4,
        text:`I've been using VirtuaryAI for nearly a year, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 49,
      credits: 10,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 139,
      credits: 30,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 229,
      credits: 50,
      desc: 'Best for enterprise use.'
    },
  ]