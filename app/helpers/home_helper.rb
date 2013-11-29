module HomeHelper

  def post_perfect_bucket
    @post_perfect_bucket ||= AWS::S3.new.buckets['post-perfect'].objects.with_prefix('postcards')
  end

  def card_categories
    post_perfect_bucket.map{|a| a.key.split("/")[1]}.uniq
  end

  def available_cards(category)
    post_perfect_bucket.select{|u| u.key[category] && u.key['.png']}
  end

  def category_background(category)
    post_perfect_bucket.select{|u| u.key[category] && u.key['.png'] && u.key['background']}
  end

  def category_name(category, i)
    category.split("-").map{|name| name.capitalize}.join(" ") + " "+ (i+1).to_s
  end
end
