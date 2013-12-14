
class S3Helper
  include ActionView::Helpers::TextHelper

  attr_accessor :bucket

  def initialize
    @bucket ||= AWS::S3.new.buckets['post-perfect'].objects.with_prefix('postcards')
  end

  def card_categories
    bucket.map{|a| a.key.split("/")[1]}.uniq
  end

  def card_categories_for_select
    card_categories.map{|c| [truncate(category_name(c), length: 22), c]}
  end

  def available_cards(category)
    bucket.select{|u| u.key[category] && u.key['.png']}
  end

  def category_background(category)
    bucket.select{|u| u.key[category] && u.key['.png'] && u.key['background']}
  end

  def category_name(category)
    category.split("-").map{|name| name.capitalize}.join(" ").to_s
  end

  def category_name_with_number(category, i)
    category.split("-").map{|name| name.capitalize}.join(" ") + " "+ (i+1).to_s
  end

end