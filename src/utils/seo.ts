export const seo = ({
  title,
  description,
  keywords = '',
}: { title: string, description: string, keywords: string}) => {
  return [
    {title},
    {name: 'description', content: description},
    {name: 'keywords', content: keywords},
  ]
}
