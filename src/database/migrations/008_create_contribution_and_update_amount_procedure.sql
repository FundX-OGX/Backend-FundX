CREATE OR REPLACE FUNCTION create_contribution_and_update_amount(
    p_user_id UUID,
    p_campaign_id UUID,
    p_event_id UUID,
    p_amount DECIMAL,
    p_transaction_hash VARCHAR,
    p_currency VARCHAR,
    p_tier VARCHAR
)
RETURNS UUID AS $$
DECLARE
    v_contribution_id UUID;
BEGIN
    -- Insert into contributions
    INSERT INTO contributions (user_id, campaign_id, event_id, amount, transaction_hash, currency, tier, created_at)
    VALUES (p_user_id, p_campaign_id, p_event_id, p_amount, p_transaction_hash, p_currency, p_tier, NOW())
    RETURNING id INTO v_contribution_id;

    -- Update amount_raised
    IF p_campaign_id IS NOT NULL THEN
        UPDATE campaigns
        SET amount_raised = amount_raised + p_amount
        WHERE id = p_campaign_id;
    ELSIF p_event_id IS NOT NULL THEN
        UPDATE events
        SET amount_raised = amount_raised + p_amount
        WHERE id = p_event_id;
    END IF;

    RETURN v_contribution_id;
END;
$$ LANGUAGE plpgsql;
