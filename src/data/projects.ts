export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  slug: string;
  overview: string;
  features: string[];
  image?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Website Design Practice",
    description:
      "HTML・CSS・JavaScriptを使用したWebサイトのデザイン・制作。",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
    ],
    slug: "website-design",
    overview:
      "HTML・CSS・JavaScriptを使用した複数ページ構成のWebサイト制作練習です。画面レイアウトやナビゲーション、フォームなどのUI実装に取り組みました。",
    features: [
      "ホームページのレイアウト制作",
      "ログイン・新規登録フォームのUI制作",
      "JavaScriptによるナビゲーションの開閉",
      "jQueryを使用したメッセージ表示",
    ],
    image: "/images/projects/website-design.png",
  },
  {
    id: 2,
    title: "Shopping Site",
    description:
      "Djangoを使用したショッピングサイトの開発。",
    technologies: [
      "Python",
      "Django",
      "SQLite",
      "JavaScript",
      "HTML / CSS",
    ],
    slug: "shopping-site",
    overview:
      "Djangoを使用して、商品一覧表示やショッピングカート機能を実装したWebアプリケーションです。商品情報とカート情報をデータベースで管理しています。",
    features: [
      "データベースからの商品一覧表示",
      "ショッピングカートへの商品追加",
      "カート内の商品数量の変更",
      "商品の削除と合計金額の再計算",
    ],
    image: "/images/projects/shopping-site.png",
  },  
  {
    id: 3,
    title: "Hand Gesture Recognition",
    description:
      "機械学習を用いたハンドジェスチャー認識アプリケーション。",
    technologies: ["Python", "MediaPipe", "PyTorch"],
    slug: "hand-gesture-recognition",
    overview:
      "カメラから取得した手のランドマーク情報を利用し、ジェスチャーを分類するアプリケーションです。",
    features: [
      "Webカメラによる手の検出",
      "ランドマーク情報の取得",
      "ジェスチャーの分類と認識結果の表示",
    ],
    image: "/images/projects/hand-gesture.png",
  },
];
