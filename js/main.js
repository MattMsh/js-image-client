const preloader = document.getElementById('preloader');
const form = document.getElementById('create-post');
const loadImageInput = document.getElementById('load-image');
const image = document.getElementById('post-image');
const title = document.getElementById('post-title');
const text = document.getElementById('post-text');
const url = document.getElementById('post-url');
const message = document.getElementById('error');
const listPosts = document.getElementById('posts');
const loadMoreBtn = document.getElementById('load-more');

let countVisiblePosts = 11;
const posts = [
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/883.jpg",
    "title": "Central Configuration Architect",
    "text": "Est exercitationem cum mollitia consequuntur tempora. Quo natus sed. Hic iste non quae.",
    "url": "https://annual-planter.net"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/715.jpg",
    "title": "Customer Functionality Planner",
    "text": "Corrupti sit vel a officia atque magnam. Sit fugit est ipsum tenetur est in temporibus nisi. Consequatur quo et eos aut neque. Aliquid minima quibusdam tempora corrupti quia molestiae. Omnis earum sit.",
    "url": "https://rosy-triangle.com"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/479.jpg",
    "title": "Chief Security Facilitator",
    "text": "Alias recusandae debitis consectetur et laudantium quis. Molestiae dolorum nostrum repudiandae. Voluptatem iste minima laboriosam aut corrupti. Debitis iste voluptas sint. Sed exercitationem dolorum similique sint.",
    "url": "https://enchanting-root.net"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/600.jpg",
    "title": "Direct Group Officer",
    "text": "Mollitia cum iusto facilis repudiandae et. Nisi enim saepe ea id ea. Nihil tenetur ducimus sed reprehenderit harum. Aut pariatur quia dolores qui.",
    "url": "http://unripe-cd.name"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/664.jpg",
    "title": "Central Division Producer",
    "text": "Dicta beatae nesciunt optio. Consequuntur repudiandae odit repellat atque. Odio et dolorem nostrum.",
    "url": "https://brave-dryer.org"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/641.jpg",
    "title": "National Integration Developer",
    "text": "Nihil in officia corrupti non aut. Dignissimos dicta suscipit vel quis perferendis aliquid. Corporis voluptates quae libero. Quos magni error. Recusandae minus totam quidem magni quod consectetur.",
    "url": "http://royal-instrumentalist.info"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/587.jpg",
    "title": "Human Markets Designer",
    "text": "Ut at est dolore. Consectetur vel et quidem. Sit accusamus est at eum et vel assumenda. Consectetur vero labore aperiam nostrum neque alias eos nisi doloremque.",
    "url": "http://variable-sunlamp.com"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/287.jpg",
    "title": "Dynamic Applications Planner",
    "text": "Consequuntur tempora quam. Libero eum esse porro aut aut iste nesciunt neque quia. Aliquid enim deserunt ut quas sunt ut amet. Eius voluptatem corporis voluptatibus ea in saepe. Corrupti sed deleniti reprehenderit et magni et amet non.",
    "url": "http://variable-meaning.info"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/689.jpg",
    "title": "Regional Brand Coordinator",
    "text": "Ratione labore eius et est tempora ut aut quod. Aut maiores ut impedit commodi. Nulla natus incidunt dolores aut odit nesciunt dolor excepturi numquam. Suscipit ullam nam quas vel mollitia et qui et.",
    "url": "https://grandiose-lark.name"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/229.jpg",
    "title": "Dynamic Operations Developer",
    "text": "Dicta asperiores odio at architecto explicabo. Nihil sint repellat quibusdam distinctio vel. Laborum inventore ducimus aut perferendis quos officia. Officia perferendis quasi et.",
    "url": "https://emotional-feedback.name"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/168.jpg",
    "title": "District Accounts Supervisor",
    "text": "Odio unde ex deleniti autem hic aut. Possimus enim nesciunt. Ullam sed est possimus.",
    "url": "http://villainous-acquisition.name"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1110.jpg",
    "title": "Legacy Solutions Producer",
    "text": "Error minus molestiae. Atque magni sed ut. Esse dicta et sed ipsum.",
    "url": "https://husky-heyday.net"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1117.jpg",
    "title": "National Usability Officer",
    "text": "Eveniet dolorem architecto. Suscipit earum corrupti. Reiciendis aliquam sed doloremque beatae distinctio voluptas itaque quo vel. Est sed vel magnam.",
    "url": "https://impractical-violet.org"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/906.jpg",
    "title": "Principal Integration Liaison",
    "text": "Ea non a sit est nostrum fugit. Iusto in blanditiis. Impedit aliquam voluptas nihil qui eos. Explicabo ad est voluptatem perspiciatis. Aperiam nostrum quidem expedita et dicta asperiores harum.",
    "url": "http://burdensome-wagon.name"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/403.jpg",
    "title": "Human Optimization Associate",
    "text": "Enim harum accusamus. Incidunt dolores qui aut nihil fuga aspernatur vitae recusandae nihil. Est molestias ratione aut. Quasi quas et sed dolor pariatur molestiae ut corporis. Dolore quis doloremque dolorem deserunt delectus. Repellat ad aliquid.",
    "url": "http://frosty-pneumonia.org"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1032.jpg",
    "title": "Product Program Administrator",
    "text": "Totam blanditiis aliquid id deserunt et qui. Dolorum modi dignissimos occaecati atque incidunt qui tenetur quia ut. Et culpa ea reiciendis aliquid molestiae.",
    "url": "https://ethical-generation.net"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/903.jpg",
    "title": "Human Functionality Officer",
    "text": "Quasi recusandae ea et culpa cum fugit eaque. Nostrum nisi sint reiciendis nulla. Eveniet eligendi maiores vitae. Saepe sunt enim. Minima nobis similique veritatis repellat.",
    "url": "https://male-consignment.biz"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1038.jpg",
    "title": "Future Assurance Technician",
    "text": "Sint repellendus alias est quidem molestias dolor ratione est. Molestiae vel est fugiat debitis vel et sapiente quam. Sit tenetur sit corrupti libero incidunt soluta ipsum.",
    "url": "http://edible-chives.name"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1081.jpg",
    "title": "Dynamic Division Technician",
    "text": "Consequatur et soluta dolor unde error. Facilis iste esse repudiandae dolorum. Dignissimos autem ab ut ducimus aut quo molestias hic ullam. Nihil omnis ab dolores dolorem soluta aut sit quisquam. Dolorem voluptas qui.",
    "url": "http://calm-pudding.biz"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/635.jpg",
    "title": "Corporate Identity Liaison",
    "text": "Recusandae aliquam excepturi quos odit. Vel impedit hic et expedita illum deserunt facere. Esse voluptatem et dolore nesciunt libero cumque. Eius perspiciatis eos doloribus consectetur. Omnis ducimus sit natus impedit qui perspiciatis.",
    "url": "http://demanding-mankind.org"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/399.jpg",
    "title": "Chief Research Director",
    "text": "Et nulla dignissimos. Qui voluptatum nesciunt consectetur rem optio consequatur ea non. Rerum nobis necessitatibus. Aut qui ipsum voluptatem sunt sed. Quo dolore qui doloremque repudiandae iste temporibus magnam blanditiis.",
    "url": "https://chief-countess.name"
  },
  {
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/757.jpg",
    "title": "Investor Quality Officer",
    "text": "Sunt non aut unde magni. Voluptatum ab dignissimos in. Accusantium tenetur neque nesciunt provident.",
    "url": "https://aggravating-netball.info"
  }
];

function isFileImage(file) {
  return file && file['type'].split('/')[0] === 'image';
}

const regexps = {
  cyrillic: new RegExp(/^[\s\u0400-\u04FF]+$/)
}

const createPost = (postURL, imageURL, title, text) => {
  return `
    <div class="post">
      <a href="${postURL}" class="post-wrapper">
        <img width="300" height="300" src="${imageURL}" alt="Post image">
        <span class="title">${title}</span>
        <span class="text">${text}</span>
      </a>
    </div>
  `;
}

const addPost = () => {
  const newPost = {
    image: image.src,
    title: title.value,
    text: text.value,
    url: url.value
  }
  posts.push(newPost);
  form.reset();
  image.style.display = 'none';
}

const renderPosts = () => {
  preloader.style.display = 'block';

  listPosts.innerHTML = '';
  if (countVisiblePosts > posts.length) {
    countVisiblePosts = posts.length;
    loadMoreBtn.style.display = 'none';
  }
  if (loadMoreBtn.style.display === 'none') {
    countVisiblePosts = posts.length;
  }
  for (let i = 0; i < countVisiblePosts; i++) {
    const {image, title, text, url} = posts[i];
    listPosts.innerHTML += createPost(url, image, title, text);
  }

  const lastImageInList = listPosts.children[listPosts.childElementCount-1].children[0].children[0];
  lastImageInList.onload = () => {
    preloader.style.display = 'none';
  }
}

const validateFields = () => {
  if (!isFileImage(loadImageInput.files[0])) {
    message.textContent = 'Файл должен быть картинкой!';
    return false;
  }
  if (!regexps.cyrillic.test(title.value)) {
    message.textContent = '\nЗаголовок должен иметь только кириллические символы!';
    return false;
  }
  if (!regexps.cyrillic.test(text.value)) {
    message.textContent = '\nТекст должен иметь только кириллические символы!';
    return false;
  }

  return true;
}

loadImageInput.onchange = () => {
  const [file] = loadImageInput.files;
  if (isFileImage(file)) {
    image.src = URL.createObjectURL(file);
    image.style.display = 'block';
  }
}

loadMoreBtn.onclick = () => {
  countVisiblePosts += 10;
  renderPosts()
};

window.onload = () => {
  renderPosts();
}

form.onsubmit = e => {
  e.preventDefault();
  const isValid = validateFields();
  isValid ? addPost() : null;
  renderPosts();
}




