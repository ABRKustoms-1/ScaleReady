const checkZapier = () => {
  if (!process.env.ZAPIER_WEBHOOK_URL || process.env.ZAPIER_WEBHOOK_URL.includes('your_id_here')) {
    console.warn('⚠️  WARNING: ZAPIER_WEBHOOK_URL is not set correctly in .env!');
  } else {
    console.log('🔗 Zapier Relay: CONFIGURED');
  }
};

module.exports = checkZapier;
