module HomeHelper
  
  def card_url(card)
    "https://s3.amazonaws.com/post-perfect/#{card.key[0..-5]}.png?AWSAccessKeyId=#{ENV['AWS_KEY_ID']}"
  end
  
end
